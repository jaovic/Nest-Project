import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { createTaskDto } from './dto/create.task.dto';

@Controller('tasks')
export class TasksController {
  @Get('/get')
  getTasks(): string {
    return JSON.stringify({ msg: 'Return Tasks' });
  }
  @Post('/post')
  createTask(@Body() task: createTaskDto) {
    return { name: `${task.name} Victor` };
  }
  @Put('/put')
  updateTask(): string {
    return JSON.stringify({ Post: 'Update Task' });
  }
  @Delete('/delete')
  deleteTaks(): string {
    return JSON.stringify({ Post: 'Delete Task' });
  }
}
