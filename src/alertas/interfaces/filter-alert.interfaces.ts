/* eslint-disable prettier/prettier */
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
  alertControlId: number;
  documentTypeId: string;
  documentTypeName: string;
  documentNumber: string;
  businessName: string;
  activationDate: string;
  alertId: string;
  alertName: string;
  alertTypeId: string;
  alertTypeName: string;
  processDetailId: string;
  processDetailName: string;
  reviewMarkId: string;
  reviewMarkName: string;
  reviewDate: string;
  reviewDocumentName: string;
  reviewerId: string;
  reviewerName: string;
  finalStatusId: string;
  finalStatusName: string;
  finalReviewerId: string;
  finalReviewerName: string;
};

export type IFilterAlertRequest = {
  activationDateFrom: string;
  activationDateUntil: string;
  reviewDateFrom: string;
  reviewDateUntil: string;
  reviewMarkId: string;
  alertTypeId: string;
  reviewStatusId: string;
  userId: string;
  roleId: string;
  size: number;
  page: number;
};

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

/* for delete, update, genericResponse*/
