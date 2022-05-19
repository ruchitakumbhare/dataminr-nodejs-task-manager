import { PartialType } from '@nestjs/mapped-types';

export class TaskTasklistDto {
  TaskId: number;

  TaskListId: number;
}
export class UpdateTaskTasklistDto extends PartialType(TaskTasklistDto) {}
