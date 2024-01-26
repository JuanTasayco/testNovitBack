/* eslint-disable prettier/prettier */
import { IGetDerivarAlertaResponse } from '../interfaces/derivar-alerta.interface';

export const FILTER_DERIVAR_DATA: IGetDerivarAlertaResponse = {
  statusCode: 200,
  messageCode: 'Successful',
  data: {
    numberItems: 2,
    numberPages: 1,
    delegations: [
      {
        delegationId: 1,
        userOrigin: 'WEBMASTER1',
        userOriginName: '',
        userDestination: 'NEYMAR',
        userDestinationName: '',
        dateFrom: '02/01/2024',
        dateUntil: '01/02/2024',
        status: 'A',
      },
      {
        delegationId: 2,
        userOrigin: 'WEBMASTER2',
        userOriginName: '',
        userDestination: 'CR7',
        userDestinationName: '',
        dateFrom: '02/01/2024',
        dateUntil: '02/01/2024',
        status: 'S',
      },
      ,
      {
        delegationId: 3,
        userOrigin: 'WEBMASTER3',
        userOriginName: '',
        userDestination: 'HALLAND',
        userDestinationName: '',
        dateFrom: '02/01/2024',
        dateUntil: '02/01/2024',
        status: 'S',
      },
      ,
      {
        delegationId: 4,
        userOrigin: 'WEBMASTER4',
        userOriginName: '',
        userDestination: 'YVARGAS',
        userDestinationName: '',
        dateFrom: '02/01/2024',
        dateUntil: '02/01/2024',
        status: 'S',
      },

      {
        delegationId: 5,
        userOrigin: 'WEBMASTER5',
        userOriginName: '',
        userDestination: 'PIZARRO',
        userDestinationName: '',
        dateFrom: '02/01/2024',
        dateUntil: '02/01/2024',
        status: 'S',
      },

      {
        delegationId: 6,
        userOrigin: 'WEBMASTER6',
        userOriginName: '',
        userDestination: 'MESSI',
        userDestinationName: '',
        dateFrom: '02/01/2024',
        dateUntil: '02/01/2024',
        status: 'S',
      },
    ],
  },
};
