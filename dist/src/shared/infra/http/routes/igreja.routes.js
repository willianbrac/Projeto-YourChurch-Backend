"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.igrejaRoutes = void 0;
const express_1 = require("express");
const CountMembrosController_1 = require("../../../../modules/igreja/useCases/CountMembros/CountMembrosController");
const CreateIgrejaController_1 = require("../../../../modules/igreja/useCases/CreateIgreja/CreateIgrejaController");
const DeleteIgrejaController_1 = require("../../../../modules/igreja/useCases/DeleteIgreja/DeleteIgrejaController");
const ListIgrejaController_1 = require("../../../../modules/igreja/useCases/ListIgreja/ListIgrejaController");
const ListIgrejasController_1 = require("../../../../modules/igreja/useCases/ListIgrejas/ListIgrejasController");
const UpdateIgrejaController_1 = require("../../../../modules/igreja/useCases/UpdateIgreja/UpdateIgrejaController");
const VerifyIgrejaMatrizController_1 = require("../../../../modules/igreja/useCases/VerifyIgrejaMatriz/VerifyIgrejaMatrizController");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const igrejaRoutes = express_1.Router();
exports.igrejaRoutes = igrejaRoutes;
const createIgrejaController = new CreateIgrejaController_1.CreateIgrejaController();
const listIgrejasController = new ListIgrejasController_1.ListIgrejasController();
const listIgrejaController = new ListIgrejaController_1.ListIgrejaController();
const deleteIgrejaController = new DeleteIgrejaController_1.DeleteIgrejaController();
const updateIgrejaController = new UpdateIgrejaController_1.UpdateIgrejaController();
const verifyIgrejaMatrizController = new VerifyIgrejaMatrizController_1.VerifyIgrejaMatrizController();
const countMembrosController = new CountMembrosController_1.CountMembrosController();
igrejaRoutes.use(ensureAuthenticated_1.ensureAuthenticated);
igrejaRoutes.post("/", createIgrejaController.handler);
igrejaRoutes.get("/find", verifyIgrejaMatrizController.handler);
igrejaRoutes.get("/membros", countMembrosController.handler);
igrejaRoutes.get("/", listIgrejasController.handler);
igrejaRoutes.get("/:id_igreja", listIgrejaController.handler);
igrejaRoutes.delete("/:id_igreja", deleteIgrejaController.handler);
igrejaRoutes.put("/:id_igreja", updateIgrejaController.handler);
