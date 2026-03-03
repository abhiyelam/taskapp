import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {

  tasks: any[] = [];

  constructor(
    private taskService: Task,
    private router: Router
  ) 
  {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  delete(id: number) {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  edit(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
