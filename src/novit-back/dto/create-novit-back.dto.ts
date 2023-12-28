import { isNumber } from 'class-validator';
import { ArchiveNorma } from '../interfaces/norma.interface';

export class CreateNovitBackDto {
  legalNormId: number;
  legalNormName: string;
  legalNormCreationDate: string;
  legalNormNumber: string;
  legalNormType: string;
  legalNormDescription: string;
  legalNormDate: string;
  legalNormEffectiveDate: string;
  archives?: ArchiveNorma[];
}
