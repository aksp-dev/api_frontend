import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { FetchUserComponent } from  './fetch-user/fetch-user.component';
import { FetchMerchantComponent } from './fetch-merchant/fetch-merchant.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'fuser', component: FetchUserComponent},
  {path: 'fmerchant', component: FetchMerchantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
