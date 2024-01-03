/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FILTER_ALERT_DATA } from './data/filter-alert.data';
import {
  PARAMETER_DATA_ESTADO_FINAL,
  PARAMETER_DATA_MARCA_REVISION,
  PARAMETER_DATA_TIPO_ALERTA,
  PARAMETER_DATA_TYPE_DOC,
} from './data/parameter.data';

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

  getParametersAlert(typeGroup: string) {
    /*TIPO_ALERTA
      ESTADO_FINAL
      TIP_DOCUM
      DET_PROCESO
    */
    console.log(typeGroup);

    switch (typeGroup) {
      case 'TIPO_ALERTA':
        return PARAMETER_DATA_TIPO_ALERTA;

      case 'ESTADO_FINAL':
        return PARAMETER_DATA_ESTADO_FINAL;

      case 'TIP_DOCUM':
        return PARAMETER_DATA_TYPE_DOC;

      case 'DET_PROCESO':
        return PARAMETER_DATA_ESTADO_FINAL;

      default:
        return PARAMETER_DATA_MARCA_REVISION;
    }
  }
}
