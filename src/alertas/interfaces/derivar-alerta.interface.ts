/* eslint-disable prettier/prettier */
/* params */
export interface IGetDerivarAlerta {
  userOrigin: string;
  userDestination: string;
  startDate: string /* 29/02/2024 */;
  endDate: string;
  size: number;
  page: number;
}

export interface IGetDerivarAlertaResponse {
  statusCode: number;
  messageCode: string;
  data: IData;
}

export interface IData {
  numberItems: number;
  numberPages: number;
  delegations: IDelegations[];
}

export interface IDelegations {
  delegationId: number;
  userOrigin: string;
  userOriginName: string;
  userDestination: string;
  userDestinationName: string;
  dateFrom: string /* 27/12/2023 */;
  dateUntil: string;
  status: string;
}

/* create alerte  status es opcional*/
export interface ICreateDerivarAlerta {
  roleId: string;
  userOriginId: string;
  userDestinationId: string;
  dateFrom: string;
  dateUntil: string;
  creationUser: string;
  modificationUser: string;
}

export interface ICreateDerivarAlertaResponse {
  statusCode: string;
  messageCode: string;
  data: number;
}

/* update alert */

export interface IUpdateDerivarAlerta {
  delegationId: number;
  dateFrom: string /* 2023-12-27 */;
  dateUntil: string;
  status: string;
  modificationUser: string;
}

/* update and delte and create*/
export interface IGenericReponse {
  statusCode: string;
  messageCode: string;
  data?: string | number /* o null */;
}

/* deleteAlert */
export interface IDeleteDerivarAlerta {
  delegationId: number;
  modificationUser: string;
}
