import { Injectable } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { FILTER_ALERT_DATA } from './data/filter-alert.data';
import { FilterAlertDtoRequest } from './dto/get-filter-alert.dto';

@Injectable()
export class AlertasService {
  create(createAlertaDto: CreateAlertaDto) {
    return 'This action adds a new alerta';
  }

  /*  findAll() {
    return `This action returns all alertas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alerta`;
  }

  update(id: number, updateAlertaDto: UpdateAlertaDto) {
    return `This action updates a #${id} alerta`;
  }

  remove(id: number) {
    return `This action removes a #${id} alerta`;
  } */

  /* 7 */
  getAlerts(requestAlertBody: FilterAlertDtoRequest) {
    console.log(requestAlertBody);
    return FILTER_ALERT_DATA;
  }
}
