import { Test, TestingModule } from '@nestjs/testing';
import { PenpalsService } from './penpals.service';

describe('PenpalsService', () => {
  let service: PenpalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenpalsService],
    }).compile();

    service = module.get<PenpalsService>(PenpalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
