"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
class AppError {
    constructor(message, statusCode = 400) {
        // eslint-disable-next-line prettier/prettier
        this.message = message,
            this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
