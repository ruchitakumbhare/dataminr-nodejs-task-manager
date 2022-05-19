import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataService } from '../interfaces/data.service';
import { ITaskRepository } from '../interfaces/task.repository';
import { ITasklistRepository } from '../interfaces/tasklist.repository';
import { PostgresTaskRepository } from './postgres.task.repository';
import { PostgresTasklistRepository } from './postgres.tasklist.repository';

@Injectable()
export class PostgresDataService
  implements IDataService, OnApplicationBootstrap
{
  tasks: ITaskRepository;
  taskLists: ITasklistRepository;

  onApplicationBootstrap() {
    this.taskLists = new PostgresTasklistRepository();
    this.tasks = new PostgresTaskRepository();
  }
}
