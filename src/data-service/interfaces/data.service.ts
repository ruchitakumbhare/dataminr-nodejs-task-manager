import { ITaskRepository } from './task.repository';
import { ITasklistRepository } from './tasklist.repository';

export abstract class IDataService {
  abstract tasks: ITaskRepository;

  abstract taskLists: ITasklistRepository;
}
