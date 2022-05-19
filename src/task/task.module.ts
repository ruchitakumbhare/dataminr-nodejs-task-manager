import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DataServiceModule } from 'src/data-service/data.service.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
  imports: [DataServiceModule],
})
export class TaskModule {}
