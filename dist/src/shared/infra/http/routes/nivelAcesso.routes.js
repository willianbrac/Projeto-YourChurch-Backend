"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nivelAcessoRoutes = void 0;
const express_1 = require("express");
const CreateNivelAcessoController_1 = require("../../../../modules/nivelAcesso/useCases/CreateNivelAcesso/CreateNivelAcessoController");
const DeleNivelAcessoController_1 = require("../../../../modules/nivelAcesso/useCases/DeleteNivelAcesso/DeleNivelAcessoController");
const ListCargosNivelAcessoController_1 = require("../../../../modules/nivelAcesso/useCases/ListCargosDeUmNivelAcesso/ListCargosNivelAcessoController");
const ListNivelAcessoController_1 = require("../../../../modules/nivelAcesso/useCases/ListNiveisAcesso/ListNivelAcessoController");
const ListUniqueNivelAcessoController_1 = require("../../../../modules/nivelAcesso/useCases/ListNivelAcesso/ListUniqueNivelAcessoController");
const UpdateNivelAcessoController_1 = require("../../../../modules/nivelAcesso/useCases/UpdateNivelAcesso/UpdateNivelAcessoController");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const nivelAcessoRoutes = express_1.Router();
exports.nivelAcessoRoutes = nivelAcessoRoutes;
const createNivelAcessoController = new CreateNivelAcessoController_1.CreateNivelAcessoController();
const listNivelAcessoController = new ListNivelAcessoController_1.ListNivelAcessoController();
const listUniqueNivelAcessoController = new ListUniqueNivelAcessoController_1.ListUniqueNivelAcessoController();
const deleteNivelAcessoController = new DeleNivelAcessoController_1.DeleteNivelAcessoController();
const listCargosNivelAcessoController = new ListCargosNivelAcessoController_1.ListCargosNivelAcessoController();
const updateNivelAcessoController = new UpdateNivelAcessoController_1.UpdateNivelAcessoController();
nivelAcessoRoutes.use(ensureAuthenticated_1.ensureAuthenticated);
nivelAcessoRoutes.post("/", createNivelAcessoController.handler);
nivelAcessoRoutes.put("/:id_nivel_acesso", updateNivelAcessoController.handler);
nivelAcessoRoutes.get("/", listNivelAcessoController.handler);
nivelAcessoRoutes.get("/:id", listUniqueNivelAcessoController.handler);
nivelAcessoRoutes.delete("/:id", deleteNivelAcessoController.handler);
nivelAcessoRoutes.get("/cargos/:id", listCargosNivelAcessoController.handler);
