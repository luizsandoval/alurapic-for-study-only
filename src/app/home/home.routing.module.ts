import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SignUpComponent } from './signup/signup.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(ROUTES)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}
