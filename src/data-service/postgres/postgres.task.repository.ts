import { Task } from '../../task/entities/task.entity';
import client from '../config/database';
import { ITaskRepository } from '../interfaces/task.repository';

export class PostgresTaskRepository implements ITaskRepository {
  async getAll(): Promise<Task[]> {
    const result = await client.query('SELECT * FROM task_tbl');
    return result.rows;
  }
  async get(id: number): Promise<Task> {
    const result = await client.query(
      `SELECT * FROM task_tbl WHERE "TaskId" = $1`,
      [id],
    );
    return result.rows[0];
  }
  async create(item: Task): Promise<Task> {
    const task = new Task();
    const result = await client.query(
      `INSERT INTO task_tbl ("Title") VALUES ($1);`,
      [item.Title],
    );
    task.Title = item.Title;
    return task;
  }
  async update(id: number, item: Task): Promise<void> {
    await client.query(`UPDATE task_tbl SET "Title" = $1 WHERE "TaskId" = $2`, [
      item.Title,
      id,
    ]);
  }
  async delete(id: number): Promise<void> {
    await client.query(`DELETE FROM task_tbl WHERE "TaskId" = $1`, [id]);
  }
}
