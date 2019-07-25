import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FilesComponent } from './files/files.component';
import { MailsComponent } from './mails/mails.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    AddUserComponent,
    FilesComponent,
    MailsComponent,
    RegistrationComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
