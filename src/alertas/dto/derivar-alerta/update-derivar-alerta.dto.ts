/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class updateDerivarAlerta {
  @IsString()
  clientDocumentTypeId: string;
  @IsString()
  clientDocumentNumber: string;
}
