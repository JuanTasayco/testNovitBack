/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class updateDerivarAlerta {
  @IsNumber()
  delegationId: number;
  @IsString()
  dateFrom: string;
  @IsString()
  dateUntil: string;
  @IsString()
  status: string;
  @IsString()
  modificationUser: string;
}
