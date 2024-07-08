import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: any[] = [];  // Define the type for tasks array

  constructor(private taskService: TaskService) {}

  ngOnInit(): void { 
    console.log('Calling getAllTickets from TaskService');
    this.taskService.getAllTickets().subscribe({
      next: (data) => {
        console.log('Data received from getAllTickets:', data);
        this.tasks = data;
      },
      error: (error) => {
        console.error('Error received from getAllTickets:', error);
      }
    });
  }
}
