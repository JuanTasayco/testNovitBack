import { Controller, Get, Query } from '@nestjs/common';
import { AlertasService } from './alertas.service';

@Controller('alertas')
export class CargaMasivaController {
  @Get('loadProcess')
  getProcessCargaMasivaByUser(@Query() userId: string) {
    return this.alertasService.getProcessCargaByUser(userId); /* userId */
  }

  @Get('loadDetail')
  getProcessCargaMasivaByIdProcess(@Query() processId: string) {
    return this.alertasService.getProcessCargaByIdProcess(processId);
  }

  constructor(private readonly alertasService: AlertasService) {}
}
