import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskComponent } from './components/task/task.component';
import {AuthGuard} from "./services/auth.guard";


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'tickets/:id', component: TaskComponent }, // Route with an ID parameter

];
