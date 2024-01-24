/* eslint-disable prettier/prettier */
/* params */
export interface IGetDerivarAlerta {
  userOriginId: string;
  userDestinationId: string;
  dateFrom: string /* 29/02/2024 */;
  dateUntil: string;
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
  roleId: string;
  userOriginId: string;
  userOriginName: string;
  userDestinationId: string;
  userDestinationIdName: string;
  dateFrom: string /* 27/12/2023 */;
  dateUntil: string;
  status: string;
}

/* create alerte */
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

/* update and delte */
export interface IGenericReponse {
  statusCode: string;
  messageCode: string;
  data?: string /* o null */;
}

/* deleteAlert */
export interface IDeleteDerivarAlerta {
  delegationId: number;
  modificationUser: string;
}
