import { Module } from '@nestjs/common';
import { NovitBackService } from './novit-back.service';
import { NovitBackController } from './novit-back.controller';

@Module({
  controllers: [NovitBackController],
  providers: [NovitBackService],
})
export class NovitBackModule {}
