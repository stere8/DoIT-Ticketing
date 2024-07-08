// src/app/signup/signup.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone:true,
  imports:[FormsModule],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const user = { username: this.username, email: this.email, password: this.password };
    this.authService.register(user).subscribe(response => {
      this.router.navigate(['/login']);
    });
  }
}
