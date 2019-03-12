import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { FetchUserComponent } from  './fetch-user/fetch-user.component';
import { FetchMerchantComponent } from './fetch-merchant/fetch-merchant.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'fuser', component: FetchUserComponent},
  {path: 'fmerchant', component: FetchMerchantComponent},
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
