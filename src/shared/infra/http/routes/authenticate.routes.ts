import { Router } from "express";

import { AuthenticateUsuarioController } from "../../../../modules/accounts/useCases/AuthenticateUsuario/AuthenticateUsuarioController";
import { RefreshTokenController } from "../../../../modules/accounts/useCases/refreshToken/RefreshTokenController";

const authenticateUsuarioRoutes = Router();

const authenticateUsuarioController = new AuthenticateUsuarioController();
const refreshTokenController = new RefreshTokenController();

authenticateUsuarioRoutes.post(
  "/sessions",
  authenticateUsuarioController.handler
);

authenticateUsuarioRoutes.post(
  "/refresh-token",
  refreshTokenController.handler
);

export { authenticateUsuarioRoutes };
