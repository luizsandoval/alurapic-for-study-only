import { NgModule } from "@angular/core";
import { FormGroup, FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home.routing.module";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { SignUpService } from "./signup/signup.service";

@NgModule({
    declarations: [
        HomeComponent,
        SignInComponent, 
        SignUpComponent
    ],
    imports: [
        ReactiveFormsModule, 
        CommonModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SignUpService
    ]
})
export class HomeModule{}