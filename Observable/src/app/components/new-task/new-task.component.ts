// new-task-component.ts
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  newTask: string = '';
  taskService: TaskService = inject(TaskService);
  taskAdded() {
    console.log(this.newTask);
    this.taskService.onCreateTask(this.newTask);
  }
}
