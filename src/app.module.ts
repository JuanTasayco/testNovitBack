import { Module } from '@nestjs/common';
import { NovitBackModule } from './novit-back/novit-back.module';

@Module({
  imports: [NovitBackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
