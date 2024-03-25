/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { AlertasService } from '../services/alertas.service';

@Controller('alertas')
export class CargaMasivaController {
  @Get('loadProcess')
  getProcessCargaMasivaByUser(@Query() userId: string) {
    return this.alertasService.getProcessCargaByUser(userId); /* userId */
  }

  @Get('oimUsuarioAlerta/process/:id/chargeProcess')
  getProcessCargaMasivaByIdProcess(@Query() processId: string) {
    return this.alertasService.getProcessCargaByIdProcess(processId);
  }

  constructor(private readonly alertasService: AlertasService) {}
}
