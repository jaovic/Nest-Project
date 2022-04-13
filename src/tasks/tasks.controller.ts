import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { createTaskDto } from './dto/create.task.dto';

@Controller('tasks')
export class TasksController {
  @Get('/get')
  getTasks(): { msg: string } {
    return { msg: 'Return Tasks' };
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
