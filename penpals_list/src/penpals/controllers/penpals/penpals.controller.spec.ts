import { Test, TestingModule } from '@nestjs/testing';
import { PenpalsController } from './penpals.controller';

describe('PenpalsController', () => {
  let controller: PenpalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenpalsController],
    }).compile();

    controller = module.get<PenpalsController>(PenpalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
