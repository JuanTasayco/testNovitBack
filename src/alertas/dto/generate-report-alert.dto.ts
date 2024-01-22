/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class GenerateReport {
  @IsString()
  activationDateFrom: string;
  @IsString()
  activationDateUntil: string;
  @IsString()
  reviewDateFrom: string;
  @IsString()
  reviewDateUntil: string;
  @IsString()
  reviewMarkId: string;
  @IsString()
  alertTypeId: string;
  @IsString()
  reviewStatusId: string;
  @IsString()
  format: string;
}
