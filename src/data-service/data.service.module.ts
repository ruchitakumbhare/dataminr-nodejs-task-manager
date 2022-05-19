import { Module } from '@nestjs/common';
import { PostgresDataService } from './postgres/postgres.data.service';
import { PostgresDataServicesModule } from './postgres/postgres.data.service.module';

@Module({
  imports: [PostgresDataServicesModule],
  exports: [PostgresDataServicesModule],
})
export class DataServiceModule {}
