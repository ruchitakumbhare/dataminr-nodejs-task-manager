import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataServiceModule } from './data-service/data.service.module';
import { PostgresDataServicesModule } from './data-service/postgres/postgres.data.service.module';
import { TaskModule } from './task/task.module';
import { TasklistModule } from './tasklist/tasklist.module';

@Module({
  imports: [TaskModule, TasklistModule, DataServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
