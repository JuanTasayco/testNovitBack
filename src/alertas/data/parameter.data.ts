/* eslint-disable prettier/prettier */
import { IParameterAlert } from '../interfaces/parameter.interfaces';

export const PARAMETER_DATA_TYPE_DOC: IParameterAlert = {
  status: '200',
  messageCode: 'Successfull',
  data: [
    {
      parameterId: 'DNI',
      parameterName: 'DNI',
    },
    {
      parameterId: 'RUC',
      parameterName: 'RUC',
    },
    {
      parameterId: 'CEX',
      parameterName: 'CEX',
    },
  ],
};

export const PARAMETER_DATA_DET_PROCESO: IParameterAlert = {
  status: '200',
  messageCode: 'Successfull',
  data: [
    {
      parameterId: 'E',
      parameterName: 'Emisión',
    },
    {
      parameterId: 'O',
      parameterName: 'Órdenes de pago',
    },
  ],
};

export const PARAMETER_DATA_TIPO_ALERTA: IParameterAlert = {
  status: '200',
  messageCode: 'Successfull',
  data: [
    {
      parameterId: 'A',
      parameterName: 'ALERT_TYPE1',
    },
    {
      parameterId: 'S',
      parameterName: 'ALERT_TYPE2',
    },
    {
      parameterId: 'M',
      parameterName: 'ALERT_TYPE3',
    },
  ],
};

export const PARAMETER_DATA_MARCA_REVISION: IParameterAlert = {
  status: '200',
  messageCode: 'Successfull',
  data: [
    {
      parameterId: 'MARCA_REV1',
      parameterName: 'MARCA_REV1',
    },
    {
      parameterId: 'MARCA_REV2',
      parameterName: 'MARCA_REV2',
    },
    {
      parameterId: 'MARCA_REV3',
      parameterName: 'MARCA_REV3',
    },
  ],
};

export const PARAMETER_DATA_ESTADO_FINAL: IParameterAlert = {
  status: '200',
  messageCode: 'Successfull',
  data: [
    {
      parameterId: 'STATUS_FINAL1',
      parameterName: 'STATUS_FINAL1',
    },
    {
      parameterId: 'STATUS_FINAL2',
      parameterName: 'STATUS_FINAL2',
    },
    {
      parameterId: 'STATUS_FINAL3',
      parameterName: 'STATUS_FINAL3',
    },
  ],
};
