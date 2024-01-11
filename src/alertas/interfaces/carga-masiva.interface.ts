/* eslint-disable prettier/prettier */
export type ProcessCargaMasivaResponse = {
  status: string;
  message: string;
  data: Datum[];
};

export type Datum = {
  processId?: string;
  alertControlId?: number;
  userId?: string;
  nameId?: string;
  dateProcess?: string;
  status: string;
  description?: string;
  reviewDocumentName?: string;
};
