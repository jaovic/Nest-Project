import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Query,
} from '@nestjs/common';
import { createTaskDto } from './dto/create.task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }
  @Post('/post')
  createTask(@Body() task: createTaskDto) {
    return { name: `${task.name} Victor` };
  }
  @Put('/put')
  updateTask(): string {
    return JSON.stringify({ Post: 'Update Task' });
  }
  @Delete('/delete?')
  deleteTaks(@Query('id') id): string {
    console.log(id);
    return JSON.stringify({ Post: `${id}` });
  }
}
