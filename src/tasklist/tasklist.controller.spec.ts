import { Test, TestingModule } from '@nestjs/testing';
import { DataServiceModule } from '../data-service/data.service.module';
import { TasklistController } from './tasklist.controller';
import { TasklistService } from './tasklist.service';

describe('TasklistController', () => {
  let controller: TasklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasklistController],
      providers: [TasklistService],
      imports: [DataServiceModule],
    }).compile();

    controller = module.get<TasklistController>(TasklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
