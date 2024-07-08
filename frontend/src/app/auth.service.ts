import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:5000/users';

  constructor(private http: HttpClient,private router:Router){}

  register(user:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,user);
  }

  login(user:any): Observable<any>{
    return this.http.get(`${this.baseUrl}/login`,user);
  }

  logout():void{
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  public get loggedIn(): boolean{
    return (localStorage.getItem('access_token') !== null)
  }
}
