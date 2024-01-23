/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';

export class getDerivarAlerta {
  @IsString()
  @IsOptional()
  userOriginId?: string;

  @IsString()
  @IsOptional()
  userDestinationId?: string;

  @IsString()
  @IsOptional()
  dateFrom?: string /* 29/02/2024 */;

  @IsString()
  @IsOptional()
  dateUntil?: string;

  @IsString()
  @IsOptional()
  size?: number;

  @IsString()
  @IsOptional()
  page?: number;
}
