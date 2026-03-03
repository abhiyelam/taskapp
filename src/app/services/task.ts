import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task {
  
  private tasks: any[] = [
    { id: 1, title: 'Learn Angular 21', completed: false }
  ];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find(t => t.id === id);
  }

  addTask(task: any) {
    task.id = Date.now();
    this.tasks.push(task);
  }

  updateTask(updatedTask: any) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
