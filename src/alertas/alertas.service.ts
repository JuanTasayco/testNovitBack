/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { FILTER_ALERT_DATA } from './data/filter-alert.data';
import {
  PARAMETER_DATA_ESTADO_FINAL,
  PARAMETER_DATA_MARCA_REVISION,
  PARAMETER_DATA_TIPO_ALERTA,
  PARAMETER_DATA_TYPE_DOC,
} from './data/parameter.data';
import { ParamGroup } from './interfaces/parameter.interfaces';
import { CreateAlertDto } from './dto/create-alerta.dto';
import {
  IFilterAlertRequest,
  IGenericReponse,
  IResponseCreateAlert,
} from './interfaces/filter-alert.interfaces';
import { UpdateAlertDto } from './dto/update-alert.dto';

@Injectable()
export class AlertasService {
  /* 7 */
  getAlerts(requestAlertBody: IFilterAlertRequest) {
    console.log(requestAlertBody);
    const { size, page } = requestAlertBody;

    const { data } = FILTER_ALERT_DATA;
    data.numberItems = Number(size);
    data.numberPages = Number(page);
    data.restrictions = data.restrictions.slice(0, data.numberItems);
    return FILTER_ALERT_DATA;
  }

  getParametersAlert(parameterGroup: ParamGroup) {
    switch (parameterGroup) {
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

  createAlert(bodyCreateAlert: CreateAlertDto) {
    if (!bodyCreateAlert) throw new BadRequestException('Rechazado');
    const response: IResponseCreateAlert = {
      status: 'Success',
      message: 'prueba mensaje creation',
      alertControlId: 1,
    };
    return response;
  }

  updateAlert(bodyUpdateAlert: UpdateAlertDto) {
    if (!bodyUpdateAlert) throw new BadRequestException('Rechazado');
    const response: IGenericReponse = {
      status: 'Success',
      message: 'prueba mensaje update',
    };
    return response;
  }

  deleteAlert(id: number) {
    console.log(id);
    if (!id) throw new BadRequestException('No existe id');
    const response: IGenericReponse = {
      status: 'Success',
      message: 'Borrado correctamente',
    };
    return response;
  }
}
