import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
// eslint-disable-next-line import-helpers/order-imports
import swaggerUi from "swagger-ui-express";

import "../../container";
import "../../container/providers";

import { createConnection } from "typeorm";

import swaggerFile from "../../../documentação.json";
import { AppError } from "../../errors/AppError";
import { router } from "./routes";

require("dotenv/config");

createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/fotos", express.static("tmp"));
app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "Error",
      message: `Internal server error = ${err.message}`,
    });
  }
);

app.listen(process.env.PORT || 3333, () => {
  console.log("Aplication running");
});
