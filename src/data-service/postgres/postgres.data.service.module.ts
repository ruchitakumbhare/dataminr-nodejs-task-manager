import { Module } from '@nestjs/common';
import { IDataService } from '../interfaces/data.service';
import { PostgresDataService } from './postgres.data.service';

@Module({
  providers: [
    {
      provide: IDataService,
      useClass: PostgresDataService,
    },
  ],
  exports: [IDataService],
})
export class PostgresDataServicesModule {}
