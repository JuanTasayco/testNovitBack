/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class createDerivarAlerta {
  @IsString()
  roleId: string;
  @IsString()
  userOriginId: string;
  @IsString()
  userDestinationId: string;
  @IsString()
  dateFrom: string;
  @IsString()
  dateUntil: string;
  @IsString()
  creationUser: string;
  @IsString()
  modificationUser: string;
}
