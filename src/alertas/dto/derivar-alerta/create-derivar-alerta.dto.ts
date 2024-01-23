/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class createDerivarAlerta {
  @IsString()
  clientDocumentTypeId: string;
  @IsString()
  clientDocumentNumber: string;
}
