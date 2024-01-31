/* eslint-disable prettier/prettier */
export interface IFilterAlertRequest {
  activationDateFrom?: string;
  activationDateUntil?: string;
  reviewDateFrom?: string;
  reviewDateUntil?: string;
  reviewMark?: string;
  alertType?: string;
  reviewStatus?: string;
  userId?: string;
  roleId?: string;
  size?: number;
  page?: number;
}

export type IFilterAlertResponse = {
  status: number;
  message: string;
  data: IData;
};

export type IData = {
  numberItems: number;
  numberPages: number;
  restrictions: IRestriction[];
};

export type IRestriction = {
  rowNumber: number;
  alertId: string;
  documentType: string;
  documentTypeName: string;
  documentNumber: string;
  businessName: string;
  activationDate: string;
  alertName: string;
  alertType: string;
  alertTypeName: string;
  processDetail: string;
  processDetailName: string;
  reviewMark: string;
  reviewMarkName: string;
  reviewDate: string;
  reviewDocumentName: string;
  reviewerId: string;
  reviewerName: string;
  finalStatus: string;
  finalStatusName: string;
  finalReviewer: string;
  finalReviewerName: string;
};

/* user params for filter alert */

/*download - generate report */
export interface IGenerateReport {
  activationDateFrom: string;
  activationDateUntil: string;
  reviewDateFrom: string;
  reviewDateUntil: string;
  reviewMarkId: string;
  alertTypeId: string;
  reviewStatusId: string;
  format: string;
}

/* razon social */
export interface IBusinessNameRequest {
  tipoDoc: string;
  numDoc: string;
  tipoConsulta: string;
}

export interface IBusinessNameResponse {
  status: string;
  message: string;
  businessName: string;
}

/* create */
export interface IBodyCreateAlert {
  clientDocumentTypeId: string;
  clientDocumentNumber: string;
  businessName: string;
  activationDate: string;
  alertId: string;
  alertTypeId: string;
  processDetailId: string;
  reviewMarkId: string;
  reviewDate: string;
  reviewDocumentName: string;
  reviewerId: string;
  finalStatusId: string;
  finalReviewerId: string;
  creationUser: string;
  modificationUser: string;
  roleId: string;
}

export interface IResponseCreateAlert {
  status: string;
  message: string;
  alertControlId: number;
}

/* update */
export interface IBodyUpdateAlert {
  alertControlId: number;
  reviewMarkId: string;
  reviewDate: string;
  reviewerId: string;
  finalStatusId: string;
  finalReviewerId: string;
  modificationUser: string;
  roleId: string;
}

export interface IGenericReponse {
  status: string;
  message: string;
}

export type IBodyUpdateDocument = {
  creationUser: string;
  modificationUser: string;
  data: DatumUpdateDoc[];
};

export type DatumUpdateDoc = {
  alertControlId: number;
  reviewDocumentName: string;
};

/* for delete, update, genericResponse*/
