import { PartialType } from '@nestjs/mapped-types';
import { CreateNovitBackDto } from './create-novit-back.dto';

export class UpdateNovitBackDto extends PartialType(CreateNovitBackDto) {}
