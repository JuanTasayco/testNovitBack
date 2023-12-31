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
import { AlertasService } from './alertas.service';

import { FilterAlertDtoRequest } from './dto/get-filter-alert.dto';
import { ParamGroup } from './interfaces/parameter.interfaces';
import { CreateAlertDto } from './dto/create-alerta.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';

@Controller('alertas')
export class AlertasController {
  constructor(private readonly alertasService: AlertasService) {}

  /* 7 */
  @Get('/alertsControl')
  getAlerts(@Query() queryParams: FilterAlertDtoRequest) {
    return this.alertasService.getAlerts(queryParams);
  }

  @Get('/parameters')
  getParametersAlert(@Query('parameterGroup') parameterGroup: ParamGroup) {
    return this.alertasService.getParametersAlert(parameterGroup);
  }

  @Post('/alertControl')
  createAlert(@Body() createAlertDto: CreateAlertDto) {
    return this.alertasService.createAlert(createAlertDto);
  }

  @Put('/alertControl')
  updateAlert(@Body() bodyUpdateAlert: UpdateAlertDto) {
    return this.alertasService.updateAlert(bodyUpdateAlert);
  }

  @Delete('/alertControl')
  deleteAlert(@Query('alertControlId') alertControlId: number) {
    return this.alertasService.deleteAlert(alertControlId);
  }
}
