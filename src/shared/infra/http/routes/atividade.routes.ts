import { Router } from "express";

import { CountAtividadesController } from "../../../../modules/atividade/useCases/CountAtividades/CountAtividadesController";
import { CountValoresController } from "../../../../modules/atividade/useCases/CountValores/CountValoresController";
import { CreateAtividadeController } from "../../../../modules/atividade/useCases/CreateAtividade/CreateAtividadeController";
import { DeleteAtividadeController } from "../../../../modules/atividade/useCases/DeleteAtividade/DeleteAtividadeController";
import { ListAtividadeController } from "../../../../modules/atividade/useCases/ListAtividade/ListAtividadeController";
import { ListAtividadesController } from "../../../../modules/atividade/useCases/ListAtividades/ListAtividadesController";
import { RelatorioAtividadesController } from "../../../../modules/atividade/useCases/RelatorioAtividades/RelatorioAtividadesController";
import { UpdateAtividadeController } from "../../../../modules/atividade/useCases/UpdateAtividade/UpdateAtividadeController";
import { ValuesRelatorioController } from "../../../../modules/atividade/useCases/ValuesRelatorio/ValuesRelatorioController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const atividadeRoutes = Router();

const createAtividadeController = new CreateAtividadeController();
const listAtividadesController = new ListAtividadesController();
const listAtividadeController = new ListAtividadeController();
const deleteAtividadeController = new DeleteAtividadeController();
const updateAtividadeController = new UpdateAtividadeController();
const relatorioAtividadeController = new RelatorioAtividadesController();
const countAtividadesController = new CountAtividadesController();
const countValoresController = new CountValoresController();
const valuesRelatorioController = new ValuesRelatorioController();

atividadeRoutes.use(ensureAuthenticated);
atividadeRoutes.post("/", createAtividadeController.handler);
atividadeRoutes.get(
  "/relatorio/:id_igreja",
  relatorioAtividadeController.handler
);
atividadeRoutes.get("/grafico", valuesRelatorioController.handler);
atividadeRoutes.get("/countValores", countValoresController.handler);
atividadeRoutes.get("/countAtividades", countAtividadesController.handler);
atividadeRoutes.get("/", listAtividadesController.handler);
atividadeRoutes.get("/:id_atividade", listAtividadeController.handler);
atividadeRoutes.delete("/:id_atividade", deleteAtividadeController.handler);
atividadeRoutes.put("/:id_atividade", updateAtividadeController.handler);

export { atividadeRoutes };
