/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class UpdateAlertDto {
  @IsNumber()
  alertControlId: number;
  @IsString()
  reviewMarkId: string;
  @IsString()
  reviewDate: string;
  @IsString()
  reviewerId: string;
  @IsString()
  finalStatusId: string;
  @IsString()
  finalReviewerId: string;
  @IsString()
  modificationUser: string;
  @IsString()
  roleId: string;
}
