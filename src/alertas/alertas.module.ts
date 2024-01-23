/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AlertasService } from './services/alertas.service';
import { AlertasController } from './controllers/alertas.controller';
import { CargaMasivaController } from './controllers/carga-masiva.controller';
import { DerivarAlertaController } from './controllers/derivar-alerta.controller';
import { DerivarAlertaService } from './services/derivar-alerta.service';

@Module({
  controllers: [
    AlertasController,
    CargaMasivaController,
    DerivarAlertaController,
  ],
  providers: [AlertasService, DerivarAlertaService],
})
export class AlertasModule {}
