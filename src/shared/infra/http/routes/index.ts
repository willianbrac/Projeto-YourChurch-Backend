import { Router } from "express";

import { atividadeRoutes } from "./atividade.routes";
import { authenticateUsuarioRoutes } from "./authenticate.routes";
import { cargoRoutes } from "./cargo.routes";
import { igrejaRoutes } from "./igreja.routes";
import { nivelAcessoRoutes } from "./nivelAcesso.routes";
import { tipoAtividadeRoutes } from "./tipoAtividade.routes";
import { usuarioRoutes } from "./usuario.routes";

const router = Router();

router.use("/nivelacesso", nivelAcessoRoutes);
router.use("/tipoatividade", tipoAtividadeRoutes);
router.use("/accounts", usuarioRoutes);
router.use("/cargo", cargoRoutes);
router.use("/igreja", igrejaRoutes);
router.use("/atividade", atividadeRoutes);
router.use(authenticateUsuarioRoutes);

export { router };
