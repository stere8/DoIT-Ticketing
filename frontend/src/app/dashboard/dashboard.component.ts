import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks = [
    {id : 1, name : 'Task 1', description: 'This is task 1'},
    {id : 2, name : 'Task 2', description: 'This is task 2'},
    {id : 3, name : 'Task 3', description: 'This is task 3'},
  ]

  constructor(){}

  ngOnInit(): void { }
}
