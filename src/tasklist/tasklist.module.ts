import { Module } from '@nestjs/common';
import { TasklistService } from './tasklist.service';
import { TasklistController } from './tasklist.controller';
import { DataServiceModule } from 'src/data-service/data.service.module';
import { PostgresDataServicesModule } from 'src/data-service/postgres/postgres.data.service.module';

@Module({
  controllers: [TasklistController],
  providers: [TasklistService],
  exports: [TasklistService],
  imports: [DataServiceModule],
})
export class TasklistModule {}
