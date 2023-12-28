import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ArchiveNorma } from '../interfaces/norma.interface';

export class CreateNovitBackDto {
  @IsNumber()
  @IsOptional()
  legalNormId: number;
  @IsString()
  legalNormName: string;
  @IsString()
  legalNormCreationDate: string;
  @IsString()
  legalNormNumber: string;
  @IsString()
  legalNormType: string;
  @IsString()
  legalNormDescription: string;
  @IsString()
  legalNormDate: string;
  @IsString()
  legalNormEffectiveDate: string;

  archives?: ArchiveNorma[];
}
