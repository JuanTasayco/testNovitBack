/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AlertasService } from './alertas.service';
import { AlertasController } from './alertas.controller';
import { CargaMasivaController } from './carga-masiva.controller';

@Module({
  controllers: [AlertasController, CargaMasivaController],
  providers: [AlertasService],
})
export class AlertasModule {}
