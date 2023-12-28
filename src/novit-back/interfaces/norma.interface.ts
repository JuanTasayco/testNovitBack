export interface NormaBody {
  legalNormId?: number;
  legalNormName: string;
  legalNormCreationDate: string;
  legalNormNumber: string;
  legalNormType: string;
  legalNormDescription: string;
  legalNormDate: string;
  legalNormEffectiveDate: string;
  archives?: ArchiveNorma[];
}

export interface ArchiveNorma {
  legalNormId: number;
  archiveId: string;
  taskId: string;
  archiveName: string;
  archivePhysical: string;
  archiveDate: string;
}

export interface ResponseCreate {
  statusCode: number;
  messageCode: string;
  data: dataResponseCreate;
}

interface dataResponseCreate {
  legalNormId?: number;
  archiveId?: number;
  archiveBase654?: string;
}

export interface ResponseGetNorma {
  statusCode: number;
  messageCode: string;
  data: NormaBody[];
  totalRegistros: number;
}
