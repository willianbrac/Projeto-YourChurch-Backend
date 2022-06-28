interface IDateProvider {
  addDays(days: number): Date;
  convertToUTC(data: Date): Date;
  validarDataInicio(data_inicio: string): boolean;
  validarDataFinal(data_final: string): boolean;
  Date(data: string): Date;
  format(data: Date): string;
}

export { IDateProvider };
