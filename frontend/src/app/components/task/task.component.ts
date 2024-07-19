// src/app/task/task.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  standalone: true,
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskId!: number; // To hold the task ID
  task!: Task; // To hold the task details

  constructor(private route: ActivatedRoute,
    private taskService: TaskService) { }

  ngOnInit(): void {
    console.log('Calling getAllTickets from TaskService');
    console.log(`Here is an access token ${localStorage.getItem('access_token')}`)
    this.route.paramMap.subscribe(params => {
      this.taskId = +params.get('id')!;

      this.taskService.getTicketbyId(this.taskId).subscribe({
        next: (data: Task) => {
          console.log('Data received from getTaskById:', data);
          this.task = data;
        },
        error: (error) => {
          console.error('Error received from getTaskById:', error);
        }
      })
    })
  }
}
