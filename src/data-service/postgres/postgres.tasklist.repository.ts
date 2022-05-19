import { Tasklist } from '../../tasklist/entities/tasklist.entity';
import client from '../config/database';
import { ITasklistRepository } from '../interfaces/tasklist.repository';

export class PostgresTasklistRepository implements ITasklistRepository {
  async getAll(): Promise<Tasklist[]> {
    const result = await client.query('SELECT * FROM taskList_tbl');
    return result.rows;
  }
  async get(id: number): Promise<Tasklist> {
    const result = await client.query(
      `SELECT * FROM taskList_tbl WHERE "TaskListId" = $1`,
      [id],
    );
    return result.rows[0];
  }
  async create(item: Tasklist): Promise<Tasklist> {
    const taskList = new Tasklist();
    const result = await client.query(
      `INSERT INTO taskList_tbl ("Title") VALUES ($1)`,
      [item.Title],
    );
    taskList.Title = item.Title;
    return taskList;
  }
  async update(id: number, item: Tasklist): Promise<void> {
    const result = await client.query(
      `UPDATE taskList_tbl SET "Title" = $1 WHERE "TaskListId" = $2`,
      [item.Title, id],
    );
  }
  async delete(id: number): Promise<void> {
    const result = await client.query(
      `DELETE FROM taskList_tbl WHERE "TaskListId" = $1`,
      [id],
    );
  }
  async addTask(taskId: number, taskListId: number): Promise<void> {
    const result = await client.query(
      `INSERT INTO taskManager_tbl("TaskId", "TaskListId") VALUES ($1, $2)`,
      [taskId, taskListId],
    );
  }
  async removeTask(taskId: number, taskListId: number): Promise<void> {
    const result = await client.query(
      `DELETE FROM public.taskManager_tbl WHERE "TaskId" = $1 AND "TaskListId" = $2`,
      [taskId, taskListId],
    );
  }
}
