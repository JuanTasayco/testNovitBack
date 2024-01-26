/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class getDerivarAlerta {
  @IsString()
  userOrigin: string;

  @IsString()
  userDestination?: string;

  @IsString()
  startDate?: string /* 29/02/2024 */;

  @IsString()
  endDate?: string;

  @IsString()
  size?: number;

  @IsString()
  page?: number;
}
