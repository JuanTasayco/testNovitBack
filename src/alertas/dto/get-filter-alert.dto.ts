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
  reviewMark?: string;

  @IsString()
  @IsOptional()
  alertType?: string;

  @IsString()
  @IsOptional()
  reviewStatus?: string;

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
