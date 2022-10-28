import { Test, TestingModule } from '@nestjs/testing';
import { DtoregisterService } from './dtoregister.service';

describe('DtoregisterService', () => {
  let service: DtoregisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtoregisterService],
    }).compile();

    service = module.get<DtoregisterService>(DtoregisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
