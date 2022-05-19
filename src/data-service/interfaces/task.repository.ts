import { Task } from 'src/task/entities/task.entity';

export interface ITaskRepository {
  getAll(): Promise<Task[]>;

  get(id: number): Promise<Task>;

  create(item: Task): Promise<Task>;

  update(id: number, item: Task): Promise<void>;

  delete(id: number): Promise<void>;
}
