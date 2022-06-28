"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const TokensUsuariosRepository_1 = require("../../modules/accounts/infra/typeorm/repositories/TokensUsuariosRepository");
const UsuarioRepository_1 = require("../../modules/accounts/infra/typeorm/repositories/UsuarioRepository");
const AtividadeRepository_1 = require("../../modules/atividade/infra/typeorm/repositories/AtividadeRepository");
const CargoRepository_1 = require("../../modules/cargo/infra/typeorm/repositories/CargoRepository");
const IgrejaRepository_1 = require("../../modules/igreja/infra/typeorm/repositories/IgrejaRepository");
const NivelAcessoRepository_1 = require("../../modules/nivelAcesso/infra/typeorm/repositories/NivelAcessoRepository");
const TipoAtividadeRepository_1 = require("../../modules/tipoAtividade/infra/typeorm/repositories/TipoAtividadeRepository");
tsyringe_1.container.registerSingleton("NivelAcessoRepository", NivelAcessoRepository_1.NivelAcessoRepository);
tsyringe_1.container.registerSingleton("TipoAtividadeRepository", TipoAtividadeRepository_1.TipoAtividadeRepository);
tsyringe_1.container.registerSingleton("UsuarioRepository", UsuarioRepository_1.UsuarioRepository);
tsyringe_1.container.registerSingleton("CargoRepository", CargoRepository_1.CargoRepository);
tsyringe_1.container.registerSingleton("IgrejaRepository", IgrejaRepository_1.IgrejaRepository);
tsyringe_1.container.registerSingleton("AtividadeRepository", AtividadeRepository_1.AtividadeRepository);
tsyringe_1.container.registerSingleton("TokensUsuariosRepository", TokensUsuariosRepository_1.TokensUsuariosRepository);