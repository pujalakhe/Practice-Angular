// show-task-component.ts
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.scss',
})
export class ShowTaskComponent implements OnInit {
  task: string[] = ['Task1', 'Task2', 'Task3', 'Task4'];

  taskService: TaskService = inject(TaskService);
  ngOnInit(): void {
    this.taskService.createTask.subscribe({
      next: (val: string) => {
        this.task.push(val);
      },
    });
  }
}
