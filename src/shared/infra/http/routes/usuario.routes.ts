import { Router } from "express";

import { AdminUpdateUsuarioController } from "../../../../modules/accounts/useCases/AdminUpdateUsuario/AdminUpdateUsuarioController";
import { CreateUsuarioController } from "../../../../modules/accounts/useCases/CreateUsuario/CreateUsuarioController";
import { DeleteUsuarioController } from "../../../../modules/accounts/useCases/DeleteUsuario/DeleteUsuarioController";
import { ListUniqueUsuarioController } from "../../../../modules/accounts/useCases/ListUsuario/ListUniqueUsuarioController";
import { ListUsuarioController } from "../../../../modules/accounts/useCases/ListUsuarios/ListUsuarioController";
import { UpdateSenhaUsuarioController } from "../../../../modules/accounts/useCases/UpdateSenhaUsuario/UpdateSenhaUsuarioController";
import { UpdateUsuarioController } from "../../../../modules/accounts/useCases/UpdateUsuario/UpdateUsuarioController";
import { ensureAdministrator } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureisAdminAndUsuarioComum } from "../middlewares/ensureisAdminAndUsuarioComum";

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const listUsuarioController = new ListUsuarioController();
const listUniqueUsuarioController = new ListUniqueUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();
const updateSenhaUsuarioController = new UpdateSenhaUsuarioController();
const adminUpdateUsuarioController = new AdminUpdateUsuarioController();
usuarioRoutes.use(ensureAuthenticated);
usuarioRoutes.post("/", createUsuarioController.handler);

usuarioRoutes.put(
  "/update",
  ensureAuthenticated,
  ensureisAdminAndUsuarioComum,
  updateUsuarioController.handler
);

usuarioRoutes.put(
  "/admin/:id_usuario",
  ensureAuthenticated,
  ensureAdministrator,
  adminUpdateUsuarioController.handler
);

usuarioRoutes.put(
  "/senha",
  ensureAuthenticated,
  updateSenhaUsuarioController.handler
);

usuarioRoutes.get("/", listUsuarioController.handler);

usuarioRoutes.delete("/:id", deleteUsuarioController.handler);
usuarioRoutes.get("/:id", listUniqueUsuarioController.handler);

export { usuarioRoutes };
