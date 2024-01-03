/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NovitBackModule } from './novit-back/novit-back.module';
import { AlertasModule } from './alertas/alertas.module';

@Module({
  imports: [NovitBackModule, AlertasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
