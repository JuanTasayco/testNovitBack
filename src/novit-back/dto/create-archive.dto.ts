import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateArchiveDto {
  @IsNumber()
  @IsOptional()
  legalNormId?: number;
  @IsString()
  @IsOptional()
  archiveId?: string;
  @IsString()
  @IsOptional()
  taskId?: string;
  @IsString()
  archiveName: string;
  @IsString()
  archivePhysical: string;
  @IsString()
  archiveDate: string;
}
