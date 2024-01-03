/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class FilterAlertDtoRequest {
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
  userId: string;
  @IsString()
  roleId: string;
  @IsNumber()
  size: number;
  @IsNumber()
  page: number;
}
