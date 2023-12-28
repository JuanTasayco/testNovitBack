import { Test, TestingModule } from '@nestjs/testing';
import { NovitBackService } from './novit-back.service';

describe('NovitBackService', () => {
  let service: NovitBackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovitBackService],
    }).compile();

    service = module.get<NovitBackService>(NovitBackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
