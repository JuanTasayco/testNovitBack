/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class getDerivarAlerta {
  @IsString()
  clientDocumentTypeId: string;
  @IsString()
  clientDocumentNumber: string;
}
