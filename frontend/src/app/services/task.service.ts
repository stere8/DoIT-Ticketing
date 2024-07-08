import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://127.0.0.1:5000/tickets'

  constructor(private http: HttpClient, private authService: AuthService) { } // Inject your auth service

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Or get from local storage: localStorage.getItem('token')
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getAllTickets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`, { headers: this.getAuthHeaders() });
  }

  getTicketbyId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  addNewTicket(ticket: any): Observable<any> {
    return this.http.post(this.baseUrl, ticket, { headers: this.getAuthHeaders() });
  }

  editTicket(ticket: any, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, ticket, { headers: this.getAuthHeaders() });
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}