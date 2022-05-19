import { Injectable } from '@nestjs/common';
import { IDataService } from '../data-service/interfaces/data.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(private dataService: IDataService) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task();
    task.Title = createTaskDto.Title;
    return this.dataService.tasks.create(task);
  }

  findAll(): Promise<Task[]> {
    return this.dataService.tasks.getAll();
  }

  findOne(id: number): Promise<Task> {
    return this.dataService.tasks.get(id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = new Task();
    task.Title = updateTaskDto.Title;
    return this.dataService.tasks.update(id, task);
  }

  remove(id: number) {
    return this.dataService.tasks.delete(id);
  }
}
