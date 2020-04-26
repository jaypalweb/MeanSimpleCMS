import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';
import { Title } from '@angular/platform-browser';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminAddPageComponent } from './components/admin-add-page/admin-add-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';


const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin/pages', component: AdminPagesComponent },
  { path: 'admin/add-page', component: AdminAddPageComponent },
  { path: 'admin/edit-page/:id', component: AdminEditPageComponent },
  { path: ':page', component: PagesComponent },
  { path: '', component: PagesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminPagesComponent,
    AdminNavbarComponent,
    AdminAddPageComponent,
    AdminEditPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
