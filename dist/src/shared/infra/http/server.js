"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
// eslint-disable-next-line import-helpers/order-imports
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("../../container");
require("../../container/providers");
const typeorm_1 = require("typeorm");
const documenta__o_json_1 = __importDefault(require("../../../documenta\u00E7\u00E3o.json"));
const AppError_1 = require("../../errors/AppError");
const routes_1 = require("./routes");
require("dotenv/config");
typeorm_1.createConnection();
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/documentation", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(documenta__o_json_1.default));
app.use("/fotos", express_1.default.static("tmp"));
app.use(routes_1.router);
app.use(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
(err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "Error",
        message: `Internal server error = ${err.message}`,
    });
});
app.listen(process.env.PORT || 3333, () => {
    console.log("Aplication running");
});
