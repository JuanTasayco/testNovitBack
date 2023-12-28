import { Test, TestingModule } from '@nestjs/testing';
import { NovitBackController } from './novit-back.controller';
import { NovitBackService } from './novit-back.service';

describe('NovitBackController', () => {
  let controller: NovitBackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovitBackController],
      providers: [NovitBackService],
    }).compile();

    controller = module.get<NovitBackController>(NovitBackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
