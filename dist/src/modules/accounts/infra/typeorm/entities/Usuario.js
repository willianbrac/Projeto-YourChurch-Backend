"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Cargo_1 = require("../../../../cargo/infra/typeorm/entities/Cargo");
const Igreja_1 = require("../../../../igreja/infra/typeorm/entities/Igreja");
let Usuario = class Usuario {
    constructor() {
        if (!this.id_usuario) {
            this.id_usuario = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "primeiro_nome_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "ultimo_nome_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "email_usuario", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "foto_perfil_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "senha_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "cpf_usuario", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Cargo_1.Cargo, (usuarios) => usuarios.usuarios),
    typeorm_1.JoinColumn({ name: "id_cargo" }),
    __metadata("design:type", Cargo_1.Cargo)
], Usuario.prototype, "cargo", void 0);
__decorate([
    typeorm_1.OneToOne(() => Igreja_1.Igreja, (igreja) => igreja.usuario),
    __metadata("design:type", Igreja_1.Igreja)
], Usuario.prototype, "igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "id_cargo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "rua_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "bairro_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "cep_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Usuario.prototype, "numero_residencia_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "complemento_residencia_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "cidade_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "estado_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "pais_usuario", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Usuario.prototype, "created_at", void 0);
Usuario = __decorate([
    typeorm_1.Entity("usuario"),
    __metadata("design:paramtypes", [])
], Usuario);
exports.Usuario = Usuario;
