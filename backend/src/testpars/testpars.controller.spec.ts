import { Test, TestingModule } from '@nestjs/testing';
import { TestparsController } from './testpars.controller';
import { TestparsService } from './testpars.service';

describe('TestparsController', () => {
  let controller: TestparsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestparsController],
      providers: [TestparsService],
    }).compile();

    controller = module.get<TestparsController>(TestparsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
