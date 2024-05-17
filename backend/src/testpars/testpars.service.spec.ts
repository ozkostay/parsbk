import { Test, TestingModule } from '@nestjs/testing';
import { TestparsService } from './testpars.service';

describe('TestparsService', () => {
  let service: TestparsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestparsService],
    }).compile();

    service = module.get<TestparsService>(TestparsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
