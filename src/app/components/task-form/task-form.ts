import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../services/task';
@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskFormComponent {

  task: any = 
  { title: '', completed: false 
    
  };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private taskService: Task,
    private router: Router
  ) 
  {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.isEdit = true;
      const existingTask = this.taskService.getTask(+id);
      if (existingTask) {
        this.task = { ...existingTask };
      }
    }
  }

  save() {
    if (this.isEdit) {
      this.taskService.updateTask(this.task);
    } else {
      this.taskService.addTask(this.task);
    }

    this.router.navigate(['/']);
  }
}
