import { Test, TestingModule } from '@nestjs/testing';
import { DtoregisterController } from './dtoregister.controller';

describe('DtoregisterController', () => {
  let controller: DtoregisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DtoregisterController],
    }).compile();

    controller = module.get<DtoregisterController>(DtoregisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
