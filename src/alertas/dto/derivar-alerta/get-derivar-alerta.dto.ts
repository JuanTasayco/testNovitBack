/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';

export class getDerivarAlerta {
  @IsString()
  userOrigin: string;

  @IsString()
  userDestination?: string;

  @IsString()
  startDate?: string /* 29/02/2024 */;

  @IsString()
  @IsOptional()
  endDate?: string;

  @IsString()
  size?: number;

  @IsString()
  page?: number;
}
