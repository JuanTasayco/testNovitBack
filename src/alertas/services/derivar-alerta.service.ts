import { Injectable } from '@nestjs/common';
import { FILTER_DERIVAR_DATA } from '../data/derivar-alert.data';

@Injectable()
export class DerivarAlertaService {
  getDerivarAlerta(derivarParams: any) {
    return FILTER_DERIVAR_DATA;
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
