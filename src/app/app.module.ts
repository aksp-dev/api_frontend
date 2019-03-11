import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module for Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatInputModule, MatCardModule,
         MatListModule, MatIconModule, MatToolbarModule, MatGridListModule,
         MatTableModule, MatPaginatorModule } from '@angular/material';

// Custom Components
import { MenuComponent } from './menu/menu.component';
import { FetchUserComponent } from './fetch-user/fetch-user.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { FetchMerchantComponent } from './fetch-merchant/fetch-merchant.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FetchUserComponent,
    SideNavigationComponent,
    TopNavigationComponent,
    SearchContainerComponent,
    FetchMerchantComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
