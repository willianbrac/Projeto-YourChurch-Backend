import { Router } from "express";

import { CreateNivelAcessoController } from "../../../../modules/nivelAcesso/useCases/CreateNivelAcesso/CreateNivelAcessoController";
import { DeleteNivelAcessoController } from "../../../../modules/nivelAcesso/useCases/DeleteNivelAcesso/DeleNivelAcessoController";
import { ListCargosNivelAcessoController } from "../../../../modules/nivelAcesso/useCases/ListCargosDeUmNivelAcesso/ListCargosNivelAcessoController";
import { ListNivelAcessoController } from "../../../../modules/nivelAcesso/useCases/ListNiveisAcesso/ListNivelAcessoController";
import { ListUniqueNivelAcessoController } from "../../../../modules/nivelAcesso/useCases/ListNivelAcesso/ListUniqueNivelAcessoController";
import { UpdateNivelAcessoController } from "../../../../modules/nivelAcesso/useCases/UpdateNivelAcesso/UpdateNivelAcessoController";
import { ensureAdministrator } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const nivelAcessoRoutes = Router();

const createNivelAcessoController = new CreateNivelAcessoController();
const listNivelAcessoController = new ListNivelAcessoController();
const listUniqueNivelAcessoController = new ListUniqueNivelAcessoController();
const deleteNivelAcessoController = new DeleteNivelAcessoController();
const listCargosNivelAcessoController = new ListCargosNivelAcessoController();
const updateNivelAcessoController = new UpdateNivelAcessoController();

nivelAcessoRoutes.use(ensureAuthenticated);
nivelAcessoRoutes.post("/", createNivelAcessoController.handler);
nivelAcessoRoutes.put("/:id_nivel_acesso", updateNivelAcessoController.handler);
nivelAcessoRoutes.get("/", listNivelAcessoController.handler);
nivelAcessoRoutes.get("/:id", listUniqueNivelAcessoController.handler);
nivelAcessoRoutes.delete("/:id", deleteNivelAcessoController.handler);
nivelAcessoRoutes.get("/cargos/:id", listCargosNivelAcessoController.handler);

export { nivelAcessoRoutes };
