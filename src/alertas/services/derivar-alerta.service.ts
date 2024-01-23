import { Injectable } from '@nestjs/common';

@Injectable()
export class DerivarAlertaService {
  getDerivarAlerta(derivarParams: any) {
    console.log(derivarParams);
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
