/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { DerivarAlertaService } from '../services/derivar-alerta.service';
import { getDerivarAlerta } from '../dto/derivar-alerta/get-derivar-alerta.dto';
import { createDerivarAlerta } from '../dto/derivar-alerta/create-derivar-alerta.dto';
import { updateDerivarAlerta } from '../dto/derivar-alerta/update-derivar-alerta.dto';

@Controller('alertas')
export class DerivarAlertaController {
  constructor(private readonly derivarAlerta: DerivarAlertaService) {}

  @Get('derivarlerta')
  getAlerts(@Query() queryParams: getDerivarAlerta) {
    return this.derivarAlerta.getDerivarAlerta(queryParams);
  }

  @Post('derivarlerta')
  createAlert(@Body() createAlertDto: createDerivarAlerta) {
    return this.derivarAlerta.createDerivarAlerta(createAlertDto);
  }

  @Put('derivarlerta')
  updateAlert(@Body() bodyUpdateAlert: updateDerivarAlerta) {
    return this.derivarAlerta.updateDerivarAlerta(bodyUpdateAlert);
  }

  @Delete('derivarlerta')
  deleteAlert(@Query('alertControlId') alertControlId: number) {
    return this.derivarAlerta.deleteDerivarAlerta(alertControlId);
  }
}
