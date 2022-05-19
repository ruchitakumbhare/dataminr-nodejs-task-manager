import { Test, TestingModule } from '@nestjs/testing';
import { DataServiceModule } from '../data-service/data.service.module';
import { TasklistService } from './tasklist.service';

describe('TasklistService', () => {
  let service: TasklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasklistService],
      imports: [DataServiceModule],
    }).compile();

    service = module.get<TasklistService>(TasklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
