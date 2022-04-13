import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return `Retornando Tasks`;
  }
  @Post()
  PostTasks(): string {
    return JSON.stringify({ Post: 'posts' });
  }
}
