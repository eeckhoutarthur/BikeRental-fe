import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { AuthenticationService } from "../Authentication.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpErrorResponse } from '@angular/common/http';

function serverSideValidateUsername(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return checkAvailabilityFn(control.value).pipe(
      map((available) => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}

function passwordValidator(control):ValidationErrors{
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  return control.value.match(regex) ? null : {wrongformat: true};
}

function comparePasswords(control: AbstractControl): ValidationErrors {
  const password = control.get("password");
  const confirmPassword = control.get("confirmPassword");
  return password.value === confirmPassword.value ? null : { passwordsDiffer: true };
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup;
  public erroMessage: String = "";

  constructor(
    private autSetvice: AuthenticationService,
    private router: Router,
    private builder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.registerFormGroup = this.builder.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email],
        serverSideValidateUsername(this.autSetvice.checkAvailabilityUserName)
      ],
      passwordGroup: this.builder.group(
        {
          password: ["", [
            Validators.required,
            Validators.minLength(8),
            passwordValidator
          ]],
          confirmPassword: ["", Validators.required],
        },
        { validator: comparePasswords},
      ),
    });
  }

  clearErrorM(){
    this.erroMessage = '';
  }

  getErrorMessage(errors: any){
    if(errors.required) return "is required";
    else if (errors.minLength) return `You need at least ${errors.minLength.requiredLength} `;
    else if(errors.userAlreadyExists) return 'this email already exists';
    else if(errors.passwordsDiffer) return 'The passwords are not the same';
    else if(errors.email) return 'this is not a valid email';
    else if(errors.wrongformat) return 'Your password needs to contain an uppercase letter,lower case letter, a number and a special character'
  }

  onSubmit(){
    this.autSetvice.register(this.registerFormGroup.value.firstname,this.registerFormGroup.value.lastname,this.registerFormGroup.value.email,this.registerFormGroup.value.passwordGroup.password).subscribe(
      (value) =>{
        if(value) this.router.navigate(["/bike/list"]);
        else this.erroMessage = "It was nos possible to register"
      },
      (error: HttpErrorResponse)=> {
        console.error(error);
        if(error.error instanceof Error) this.erroMessage = `Error occurred while trying to register the user ${this.registerFormGroup.value.email}`;
        else this.erroMessage = `${error.status} while trying to register the user ${this.registerFormGroup.value.email}`;
      }
    );
  }
}
