import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      tittle: 'Testing',
      description: 'testin description',
      done: true,
    },
    {
      id: 2,
      tittle: 'Testing 2',
      description: 'testin description',
      done: false,
    },
    {
      id: 3,
      tittle: 'Testing 3',
      description: 'testin description',
      done: true,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }
  getTask(id: number): Task {
    return this.tasks.find((task) => task.id == id);
  }
}
