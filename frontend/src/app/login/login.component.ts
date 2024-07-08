import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string='';
  password:string = '';

  constructor(private authService: AuthService, private router: Router){}

  onSubmit(){
    const user = {email: this.email, password: this.password};
    this.authService.login(user).subscribe(response =>{
      localStorage.setItem('access_token',response.access_token);
      this.router.navigate(['/']);
    })
  }
}
