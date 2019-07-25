import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { FilesComponent } from '../files/files.component';
import { MailsComponent } from '../mails/mails.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';

const routes: Routes = [
   { 
     path: 'users', 
     component: UserComponent 
   },
   { 
     path: 'user/add', 
     component: AddUserComponent 
   },
   { 
     path: 'users/:id', 
     component: UserDetailsComponent 
   },
   { 
    path: 'files', 
    component: FilesComponent 
  },
  { 
    path: 'mails', 
    component: MailsComponent 
  },
  { 
    path: 'registraion', 
    component: RegistrationComponent
  },
  { 
    path: 'loginpage', 
    component: LoginpageComponent
  },
   { 
     path: '', 
     redirectTo: 'users', 
     pathMatch: 'full'
   }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}