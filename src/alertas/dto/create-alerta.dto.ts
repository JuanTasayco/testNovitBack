/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateAlertDto {
  @IsString()
  clientDocumentTypeId: string;
  @IsString()
  clientDocumentNumber: string;
  @IsString()
  businessName: string;
  @IsString()
  activationDate: string;
  @IsString()
  alertId: string;
  @IsString()
  alertTypeId: string;
  @IsString()
  processDetailId: string;
  @IsString()
  reviewMarkId: string;
  @IsString()
  reviewDate: string;
  @IsString()
  reviewDocumentName: string;
  @IsString()
  reviewerId: string;
  @IsString()
  finalStatusId: string;
  @IsString()
  finalReviewerId: string;
  @IsString()
  creationUser: string;
  @IsString()
  modificationUser: string;
  @IsString()
  roleId: string;
}
