/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class RazonSocial {
  @IsString()
  tipoDoc: number;

  @IsString()
  numDoc: string;

  @IsString()
  tipoConsulta: string;
}
