/* eslint-disable prettier/prettier */
import { ProcessCargaMasivaResponse } from '../interfaces/carga-masiva.interface';

export const CARGA_MASIVA_DATA_BY_USER: ProcessCargaMasivaResponse = {
  status: 'Sucess',
  message: 'Carga correcta',
  data: [
    {
      processId: '1',
      userId: '1',
      userName: 'nombre1',
      dateProcess: 'dateProcess1',
      status: 'status1',
    },
    {
      processId: '2',
      userId: '2',
      userName: 'nombre2',
      dateProcess: 'dateProcess2',
      status: 'status2',
    },
    {
      processId: '3',
      userId: '3',
      userName: 'nombre3',
      dateProcess: 'dateProcess3',
      status: 'status3',
    },
    {
      processId: '4',
      userId: '4',
      userName: 'nombre4',
      dateProcess: 'dateProcess4',
      status: 'status4',
    },
    {
      processId: '5',
      userId: '5',
      userName: 'nombre5',
      dateProcess: 'dateProcess5',
      status: 'status5',
    },
  ],
};

export const CARGA_MASIVA_DATA_BY_IDPROCESS: ProcessCargaMasivaResponse = {
  status: 'String',
  message: 'String',
  data: [
    {
      alertId: 1,
      reviewDocumentName: 'String',
      gestorId: 'String',
      status: 'String',
      description: 'String',
    },
    {
      alertId: 2,
      reviewDocumentName: 'String',
      gestorId: 'String',
      status: 'String',
      description: 'String',
    },
    {
      alertId: 3,
      reviewDocumentName: 'String',
      gestorId: 'String',
      status: 'String',
      description: 'String',
    },
    {
      alertId: 4,
      reviewDocumentName: 'String',
      gestorId: 'String',
      status: 'String',
      description: 'String',
    },
    {
      alertId: 5,
      reviewDocumentName: 'String',
      gestorId: 'String',
      status: 'String',
      description: 'String',
    },
  ],
};
