/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class updateDerivarAlerta {
  @IsString()
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
