/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AlertasService } from './alertas.service';

import { FilterAlertDtoRequest } from './dto/get-filter-alert.dto';
import { ParamGroup } from './interfaces/parameter.interfaces';
import { CreateAlertDto } from './dto/create-alerta.dto';

@Controller('alertas')
export class AlertasController {
  constructor(private readonly alertasService: AlertasService) {}

  /* @Post()
  create(@Body() createAlertaDto: CreateAlertaDto) {
    return this.alertasService.create(createAlertaDto);
  } */

  /*   @Get()
  findAll() {
    return this.alertasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alertasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlertaDto: UpdateAlertaDto) {
    return this.alertasService.update(+id, updateAlertaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertasService.remove(+id);
  } */

  /* 7 */
  @Get('/alertsControl')
  getAlerts(@Query() queryParams: FilterAlertDtoRequest) {
    return this.alertasService.getAlerts(queryParams);
  }

  @Get('/parameters')
  getParametersAlert(@Query('parameterGroup') parameterGroup: ParamGroup) {
    return this.alertasService.getParametersAlert(parameterGroup);
  }

  @Post()
  createAlert(@Body() createAlertDto: CreateAlertDto) {
    return this.alertasService.createAlert(createAlertDto);
  }
}
