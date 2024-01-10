/* eslint-disable prettier/prettier */
import { IsString, ValidateNested } from 'class-validator';
import { DataRequestDocumentDto } from './data-request-document.dto';
import { Type } from 'class-transformer';

export class UploadDocumentDto {
  @IsString()
  creationUser: string;

  @IsString()
  modificationUser: string;

  @ValidateNested()
  @Type(() => DataRequestDocumentDto)
  data: DataRequestDocumentDto[];
}
