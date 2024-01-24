/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FILTER_DERIVAR_DATA } from '../data/derivar-alert.data';
import { getDerivarAlerta } from '../dto/derivar-alerta/get-derivar-alerta.dto';

@Injectable()
export class DerivarAlertaService {
  getDerivarAlerta(derivarParams: getDerivarAlerta) {
    const { size, page } = derivarParams;

    const dataAlert = JSON.parse(JSON.stringify(FILTER_DERIVAR_DATA));

    dataAlert.data.delegations = dataAlert.data.delegations.slice(0, size);
    dataAlert.data.numberItems = size;
    dataAlert.data.numberPages = page;
    return dataAlert;
  }
  createDerivarAlerta(bodyCreateDerivarAlerta: any) {
    return {
      statusCode: 'string',
      messageCode: 'string',
      data: 1,
    };
  }
  updateDerivarAlerta(bodyUpdateDerivarAlerta: any) {
    return {
      statusCode: '200',
      messageCode: 'eliminado correctamente',
      data: null,
    };
  }
  deleteDerivarAlerta(id: number) {
    return {
      statusCode: '200',
      messageCode: 'eliminado correctamente',
    };
  }
}
