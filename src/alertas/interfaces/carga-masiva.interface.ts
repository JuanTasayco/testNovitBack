/* eslint-disable prettier/prettier */
export type ProcessCargaMasivaResponse = {
  status: string;
  message: string;
  data: Datum[];
};

export interface Datum {
  processId?: string;
  alertId?: number;
  userId?: string;
  userName?: string;
  dateProcess?: string;
  status?: string;
  gestorId?: string;
  description?: string;
  reviewDocumentName?: string;
}
