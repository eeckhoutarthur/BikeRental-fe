import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponentComponent } from './PageNotFoundComponent/PageNotFoundComponent.component';
import { UserModule } from './user/user.module';

const appRoutes : Routes = [
  {path: 'bike', loadChildren: () => import('./bike/bike.module').then(obj => obj.BikeModule)},
  {path: 'order', loadChildren: () => import('./order/order.module').then(obj => obj.OrderModule)},
  {path: '', redirectTo:'bike/list', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules}),
    UserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
