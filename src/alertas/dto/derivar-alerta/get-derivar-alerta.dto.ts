/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class getDerivarAlerta {
  @IsString()
  userOriginId: string;

  @IsString()
  userDestinationId: string;

  @IsString()
  dateFrom: string /* 29/02/2024 */;

  @IsString()
  dateUntil: string;

  @IsString()
  size: number;

  @IsString()
  page: number;
}
