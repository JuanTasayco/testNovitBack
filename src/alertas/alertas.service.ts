/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FILTER_ALERT_DATA } from './data/filter-alert.data';

@Injectable()
export class AlertasService {
  /*   create(createAlertaDto: CreateAlertaDto) {
    return 'This action adds a new alerta';
  } */

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
  getAlerts(requestAlertBody: any) {
    console.log(requestAlertBody);
    const { size, page } = requestAlertBody;

    const { data } = FILTER_ALERT_DATA;
    data.numberItems = Number(size);
    data.numberPages = Number(page);
    data.restrictions = data.restrictions.slice(0, data.numberItems);
    return FILTER_ALERT_DATA;
  }
}
