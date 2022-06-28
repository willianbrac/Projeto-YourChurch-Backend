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
exports.UsuarioRepository = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("../entities/Usuario");
class UsuarioRepository {
    constructor() {
        this.repository = typeorm_1.getRepository(Usuario_1.Usuario);
    }
    update({ primeiro_nome_usuario, ultimo_nome_usuario, email_usuario, senha_usuario, cpf_usuario, id_cargo, rua_usuario, bairro_usuario, cep_usuario, numero_residencia_usuario, complemento_residencia_usuario, cidade_usuario, estado_usuario, pais_usuario, foto_perfil_usuario, id_usuario, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = this.repository.create({
                id_usuario,
                primeiro_nome_usuario,
                ultimo_nome_usuario,
                email_usuario,
                senha_usuario,
                cpf_usuario,
                id_cargo,
                rua_usuario,
                bairro_usuario,
                cep_usuario,
                numero_residencia_usuario,
                complemento_residencia_usuario,
                cidade_usuario,
                estado_usuario,
                pais_usuario,
                foto_perfil_usuario,
            });
            yield this.repository.save(usuario);
            return usuario;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.repository.findOne(id, {
                relations: ["cargo", "igreja"],
            });
            return usuario;
        });
    }
    findByEmail(email_usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailUsuarioExiste = yield this.repository.findOne({
                where: { email_usuario },
            });
            return emailUsuarioExiste;
        });
    }
    findByPrimaryName(primeiro_nome_usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const primeiroNomeExiste = yield this.repository.findOne({
                where: { primeiro_nome_usuario },
            });
            return primeiroNomeExiste;
        });
    }
    findByLastName(ultimo_nome_usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const ultimoNomeUsuarioExiste = yield this.repository.findOne({
                where: { ultimo_nome_usuario },
            });
            return ultimoNomeUsuarioExiste;
        });
    }
    findByCpf(cpf_usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const CpfUsuarioExiste = yield this.repository.findOne({
                where: { cpf_usuario },
            });
            return CpfUsuarioExiste;
        });
    }
    create({ primeiro_nome_usuario, ultimo_nome_usuario, email_usuario, senha_usuario, cpf_usuario, id_cargo, rua_usuario, bairro_usuario, cep_usuario, numero_residencia_usuario, complemento_residencia_usuario, cidade_usuario, estado_usuario, pais_usuario, foto_perfil_usuario, id_usuario, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = this.repository.create({
                primeiro_nome_usuario,
                ultimo_nome_usuario,
                email_usuario,
                senha_usuario,
                cpf_usuario,
                id_cargo,
                rua_usuario,
                bairro_usuario,
                cep_usuario,
                numero_residencia_usuario,
                complemento_residencia_usuario,
                cidade_usuario,
                estado_usuario,
                pais_usuario,
                foto_perfil_usuario,
                id_usuario,
            });
            yield this.repository.save(usuario);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const todosUsuarios = yield this.repository.find({
                relations: ["cargo", "igreja"],
            });
            return todosUsuarios;
        });
    }
}
exports.UsuarioRepository = UsuarioRepository;
