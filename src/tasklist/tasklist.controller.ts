import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasklistService } from './tasklist.service';
import { CreateTasklistDto } from './dto/create-tasklist.dto';
import { UpdateTasklistDto } from './dto/update-tasklist.dto';
import { TaskTasklistDto } from './dto/task-tasklist.dto';

@Controller('tasklist')
export class TasklistController {
  constructor(private readonly tasklistService: TasklistService) {}

  @Post()
  create(@Body() createTasklistDto: CreateTasklistDto) {
    return this.tasklistService.create(createTasklistDto);
  }

  @Get()
  findAll() {
    return this.tasklistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tasklistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTasklistDto: UpdateTasklistDto,
  ) {
    return this.tasklistService.update(+id, updateTasklistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tasklistService.remove(+id);
  }

  @Post('/addTask')
  addTask(@Body() TasklistDto: TaskTasklistDto) {
    return this.tasklistService.addTask(TasklistDto);
  }

  @Delete('/removeTask')
  removeTask(@Body() TasklistDto: TaskTasklistDto) {
    return this.tasklistService.removeTask(TasklistDto);
  }
}
