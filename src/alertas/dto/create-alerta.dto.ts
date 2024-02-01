/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateAlertDto {
  @IsString()
  documentType: string;
  @IsString()
  documentNumber: string;
  @IsString()
  businessName: string;
  @IsString()
  activationDate: string;
  @IsString()
  alertId: string;
  @IsString()
  alertType: string;
  @IsString()
  processDetail: string;
  @IsString()
  reviewMark: string;
  @IsString()
  reviewDate: string;
  @IsString()
  reviewDocumentName: string;
  @IsString()
  reviewerId: string;
  @IsString()
  finalStatus: string;
  @IsString()
  finalReviewer: string;
  @IsString()
  creationUser: string;
  @IsString()
  modificationUser: string;
  @IsString()
  roleId: string;
}
