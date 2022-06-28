"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoRepository = void 0;
const typeorm_1 = require("typeorm");
const Cargo_1 = require("../entities/Cargo");
class CargoRepository {
    constructor() {
        this.getManager = typeorm_1.getManager();
        this.repository = typeorm_1.getRepository(Cargo_1.Cargo);
        this.getManager = typeorm_1.getManager();
    }
    findByNameCargo(nome_cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoExiste = yield this.repository.findOne({ nome_cargo });
            return cargoExiste;
        });
    }
    create({ id_cargo, nome_cargo, descricao, id_nivel_acesso, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargo = this.repository.create({
                id_cargo,
                nome_cargo,
                descricao,
                id_nivel_acesso,
            });
            yield this.repository.save(cargo);
        });
    }
    update({ id_cargo, nome_cargo, descricao, id_nivel_acesso, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargo = this.repository.create({
                id_cargo,
                nome_cargo,
                descricao,
                id_nivel_acesso,
            });
            yield this.repository.save(cargo);
            return cargo;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const cargo = yield this.getManager.find(Cargo_1.Cargo, {
                relations: ["nivelAcesso"],
            });
            return cargo;
        });
    }
    findByCargoId(id_cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargo = yield this.repository.findOne(id_cargo);
            return cargo;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
}
exports.CargoRepository = CargoRepository;
