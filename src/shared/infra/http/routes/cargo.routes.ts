import { Router } from "express";

import { CreateCargoController } from "../../../../modules/cargo/useCases/CreateCargo/CreateCargoController";
import { DeleteCargoController } from "../../../../modules/cargo/useCases/DeleteCargo/DeleteCargoController";
import { ListUniqueCargoController } from "../../../../modules/cargo/useCases/ListCargo/ListUniqueCargoController";
import { ListCargoController } from "../../../../modules/cargo/useCases/ListCargos/ListCargoController";
import { UpdateCargoController } from "../../../../modules/cargo/useCases/UpdateCargo/UpdateCargoController";
import { ensureAdministrator } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const cargoRoutes = Router();

const createCargoController = new CreateCargoController();
const listCargoController = new ListCargoController();
const listUniqueCargoController = new ListUniqueCargoController();
const deleteCargoController = new DeleteCargoController();
const updateCargoController = new UpdateCargoController();

cargoRoutes.use(ensureAuthenticated);
cargoRoutes.post("/", createCargoController.handler);
cargoRoutes.get("/", listCargoController.handler);
cargoRoutes.get("/:id", listUniqueCargoController.handler);
cargoRoutes.delete("/:id", deleteCargoController.handler);
cargoRoutes.put("/:id_cargo", updateCargoController.handler);

export { cargoRoutes };
