import { Router } from "express";

import { CreateTipoAtividadeController } from "../../../../modules/tipoAtividade/useCases/CreateTipoAtividade/CreateTipoAtividadeController";
import { DeleteTipoAtividadeController } from "../../../../modules/tipoAtividade/useCases/DeleteTipoAtividade/DeleteTipoAtividadeController";
import { ListUniqueTipoAtividadeController } from "../../../../modules/tipoAtividade/useCases/ListTipoAtividade/ListUniqueTipoAtividadeController";
import { ListTipoAtividadeController } from "../../../../modules/tipoAtividade/useCases/ListTiposAtividades/ListTipoAtividadeController";
import { UpdateTipoAtividadeController } from "../../../../modules/tipoAtividade/useCases/UpdateTipoAtividade/UpdateTipoAtividadeController";
import { ensureAdministrator } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const tipoAtividadeRoutes = Router();

const createTipoAtividadeController = new CreateTipoAtividadeController();
const listTipoAtividadeController = new ListTipoAtividadeController();
const listUniqueTipoAtividadeController = new ListUniqueTipoAtividadeController();
const deleteTipoAtividadeController = new DeleteTipoAtividadeController();
const updateTipoAtividadeController = new UpdateTipoAtividadeController();

tipoAtividadeRoutes.use(ensureAuthenticated); // MIDDEWARE DE AUTENTICAÇÃO
tipoAtividadeRoutes.post("/", createTipoAtividadeController.handler);
tipoAtividadeRoutes.put(
  "/:id_tipo_atividade",
  updateTipoAtividadeController.handler
);
tipoAtividadeRoutes.get("/", listTipoAtividadeController.handler);
tipoAtividadeRoutes.get("/:id", listUniqueTipoAtividadeController.handler);
tipoAtividadeRoutes.delete("/:id", deleteTipoAtividadeController.handler);

export { tipoAtividadeRoutes };
