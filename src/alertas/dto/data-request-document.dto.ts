/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class DataRequestDocumentDto {
  @IsNumber()
  alertControlId: number;
  @IsString()
  reviewDocumentName: string;
}
