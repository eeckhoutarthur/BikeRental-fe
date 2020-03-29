export class Brand {
    // const brands = {"Specialized","Trek","Ridley"};
    constructor(private _brands = ['Specialized','Trek','Ridley']) {}

    public get brands(){
        return this._brands;
    }
}
