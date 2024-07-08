import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'logout', component:LogoutComponent},
    {path:'signup', component:SignupComponent},
];