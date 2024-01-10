/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';

export class FilterAlertDtoRequest {
  @IsString()
  @IsOptional()
  activationDateFrom?: string;

  @IsString()
  @IsOptional()
  activationDateUntil?: string;

  @IsString()
  @IsOptional()
  reviewDateFrom?: string;

  @IsString()
  @IsOptional()
  reviewDateUntil?: string;

  @IsString()
  @IsOptional()
  reviewMarkId?: string;

  @IsString()
  @IsOptional()
  alertTypeId?: string;

  @IsString()
  @IsOptional()
  reviewStatusId?: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  roleId?: string;

  @IsOptional()
  size: number;

  @IsOptional()
  page: number;
}
