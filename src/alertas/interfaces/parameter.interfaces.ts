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
