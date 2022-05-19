import { Tasklist } from 'src/tasklist/entities/tasklist.entity';

export interface ITasklistRepository {
  getAll(): Promise<Tasklist[]>;

  get(id: number): Promise<Tasklist>;

  create(item: Tasklist): Promise<Tasklist>;

  update(id: number, item: Tasklist): Promise<void>;

  delete(id: number): Promise<void>;

  addTask(taskId: number, taskListId: number): Promise<void>;

  removeTask(taskId: number, taskListId: number): Promise<void>;
}
