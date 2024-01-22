/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AlertasController } from './controllers/alertas.controller';
import { AlertasService } from './alertas.service';

describe('AlertasController', () => {
  let controller: AlertasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertasController],
      providers: [AlertasService],
    }).compile();

    controller = module.get<AlertasController>(AlertasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
