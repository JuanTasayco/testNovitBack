/* eslint-disable prettier/prettier */
export type IParameterAlert = {
  status: string;
  messageCode: string;
  data: IDatum[];
};

export type IDatum = {
  parameterId: string;
  parameterName: string;
};

export type ParamGroup =
  | 'TIPO_ALERTA'
  | 'ESTADO_FINAL'
  | 'TIP_DOCUM'
  | 'DET_PROCESO'
  | '';
