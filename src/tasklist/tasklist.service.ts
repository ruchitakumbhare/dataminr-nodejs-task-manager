import { Injectable } from '@nestjs/common';
import { IDataService } from '../data-service/interfaces/data.service';
import { CreateTasklistDto } from './dto/create-tasklist.dto';
import { TaskTasklistDto } from './dto/task-tasklist.dto';
import { UpdateTasklistDto } from './dto/update-tasklist.dto';
import { Tasklist } from './entities/tasklist.entity';

@Injectable()
export class TasklistService {
  constructor(private dataService: IDataService) {}

  create(createTasklistDto: CreateTasklistDto) {
    const list = new Tasklist();
    list.Title = createTasklistDto.Title;
    return this.dataService.taskLists.create(list);
  }

  findAll() {
    return this.dataService.taskLists.getAll();
  }

  findOne(id: number) {
    return this.dataService.taskLists.get(id);
  }

  update(id: number, updateTasklistDto: UpdateTasklistDto) {
    const task = new Tasklist();
    task.Title = updateTasklistDto.Title;
    return this.dataService.taskLists.update(id, task);
  }

  remove(id: number) {
    return this.dataService.taskLists.delete(id);
  }

  addTask(tasklistDto: TaskTasklistDto) {
    return this.dataService.taskLists.addTask(
      tasklistDto.TaskId,
      tasklistDto.TaskListId,
    );
  }

  removeTask(tasklistDto: TaskTasklistDto) {
    return this.dataService.taskLists.removeTask(
      tasklistDto.TaskId,
      tasklistDto.TaskListId,
    );
  }
}
