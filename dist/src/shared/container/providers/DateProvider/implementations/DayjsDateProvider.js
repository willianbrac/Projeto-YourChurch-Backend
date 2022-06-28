"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayjsDateProvider = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const isSameOrBefore_1 = __importDefault(require("dayjs/plugin/isSameOrBefore"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(isSameOrBefore_1.default);
class DayjsDateProvider {
    format(data) {
        return dayjs_1.default(data).format("DD/MM/YYYY");
    }
    Date(data) {
        return dayjs_1.default(data).toDate();
    }
    validarDataInicio(data_inicio) {
        return dayjs_1.default(data_inicio).isValid();
    }
    validarDataFinal(data_final) {
        return dayjs_1.default(data_final).isValid();
    }
    convertToUTC(data) {
        return dayjs_1.default(data).utc().local().toDate();
    }
    addDays(days) {
        return dayjs_1.default().add(days, "days").toDate();
    }
}
exports.DayjsDateProvider = DayjsDateProvider;
