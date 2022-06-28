import { Router } from "express";

import { CountMembrosController } from "../../../../modules/igreja/useCases/CountMembros/CountMembrosController";
import { CreateIgrejaController } from "../../../../modules/igreja/useCases/CreateIgreja/CreateIgrejaController";
import { DeleteIgrejaController } from "../../../../modules/igreja/useCases/DeleteIgreja/DeleteIgrejaController";
import { ListIgrejaController } from "../../../../modules/igreja/useCases/ListIgreja/ListIgrejaController";
import { ListIgrejasController } from "../../../../modules/igreja/useCases/ListIgrejas/ListIgrejasController";
import { UpdateIgrejaController } from "../../../../modules/igreja/useCases/UpdateIgreja/UpdateIgrejaController";
import { VerifyIgrejaMatrizController } from "../../../../modules/igreja/useCases/VerifyIgrejaMatriz/VerifyIgrejaMatrizController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const igrejaRoutes = Router();

const createIgrejaController = new CreateIgrejaController();
const listIgrejasController = new ListIgrejasController();
const listIgrejaController = new ListIgrejaController();
const deleteIgrejaController = new DeleteIgrejaController();
const updateIgrejaController = new UpdateIgrejaController();
const verifyIgrejaMatrizController = new VerifyIgrejaMatrizController();
const countMembrosController = new CountMembrosController();

igrejaRoutes.use(ensureAuthenticated);
igrejaRoutes.post("/", createIgrejaController.handler);
igrejaRoutes.get("/find", verifyIgrejaMatrizController.handler);
igrejaRoutes.get("/membros", countMembrosController.handler);
igrejaRoutes.get("/", listIgrejasController.handler);
igrejaRoutes.get("/:id_igreja", listIgrejaController.handler);
igrejaRoutes.delete("/:id_igreja", deleteIgrejaController.handler);

igrejaRoutes.put("/:id_igreja", updateIgrejaController.handler);

export { igrejaRoutes };
