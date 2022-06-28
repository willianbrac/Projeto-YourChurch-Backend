import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);
dayjs.extend(isSameOrBefore);

class DayjsDateProvider implements IDateProvider {
  format(data: Date): string {
    return dayjs(data).format("DD/MM/YYYY");
  }
  Date(data: string): Date {
    return dayjs(data).toDate();
  }
  validarDataInicio(data_inicio: string): boolean {
    return dayjs(data_inicio).isValid();
  }

  validarDataFinal(data_final: string): boolean {
    return dayjs(data_final).isValid();
  }

  convertToUTC(data: Date): Date {
    return dayjs(data).utc().local().toDate();
  }

  addDays(days: number): Date {
    return dayjs().add(days, "days").toDate();
  }
}

export { DayjsDateProvider };
