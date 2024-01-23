import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FilterAlertDtoRequest } from '../dto/get-filter-alert.dto';
import { CreateAlertDto } from '../dto/create-alerta.dto';
import { UpdateAlertDto } from '../dto/update-alert.dto';
import { DerivarAlertaService } from '../services/derivar-alerta.service';

@Controller('alertas')
export class DerivarAlertaController {
  constructor(private readonly derivarAlerta: DerivarAlertaService) {}
  @Get('alertsControl')
  getAlerts(@Query() queryParams: FilterAlertDtoRequest) {
    return this.derivarAlerta.getDerivarAlerta(queryParams);
  }

  @Post('alertControl')
  createAlert(@Body() createAlertDto: CreateAlertDto) {
    return this.derivarAlerta.createDerivarAlerta(createAlertDto);
  }

  @Put('alertControl')
  updateAlert(@Body() bodyUpdateAlert: UpdateAlertDto) {
    return this.derivarAlerta.updateDerivarAlerta(bodyUpdateAlert);
  }

  @Delete('alertControl')
  deleteAlert(@Query('alertControlId') alertControlId: number) {
    return this.derivarAlerta.deleteDerivarAlerta(alertControlId);
  }
}
