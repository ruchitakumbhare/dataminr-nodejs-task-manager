import { Test, TestingModule } from '@nestjs/testing';
import { DataServiceModule } from '../data-service/data.service.module';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('TaskController', () => {
  let controller: TaskController;
  let spyService: TaskService;
  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: TaskService,
      useFactory: () => ({
        create: jest.fn(() => []),
        findAll: jest.fn(() => []),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService, ApiServiceProvider],
      imports: [DataServiceModule],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    spyService = module.get<TaskService>(TaskService);
  });

  describe('create', () => {
    it('calling create task', () => {
      const dto = new CreateTaskDto();
      dto.Title = 'abc';
      controller.create(dto);
      expect(spyService.create).toHaveBeenCalled();
      expect(spyService.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('findAll should return the expected result', async () => {
      const result: Task[] = [{ Title: 'abc' }];
      jest
        .spyOn(spyService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));
      expect(await controller.findAll()).toBe(result);
    });
  });
});
