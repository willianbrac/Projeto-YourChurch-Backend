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
exports.Cargo = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Usuario_1 = require("../../../../accounts/infra/typeorm/entities/Usuario");
const NivelAcesso_1 = require("../../../../nivelAcesso/infra/typeorm/entities/NivelAcesso");
let Cargo = class Cargo {
    constructor() {
        if (!this.id_cargo) {
            this.id_cargo = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], Cargo.prototype, "id_cargo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cargo.prototype, "nome_cargo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cargo.prototype, "descricao", void 0);
__decorate([
    typeorm_1.ManyToOne(() => NivelAcesso_1.NivelAcesso, (cargos) => cargos.cargos),
    typeorm_1.JoinColumn({ name: "id_nivel_acesso" }),
    __metadata("design:type", Promise)
], Cargo.prototype, "nivelAcesso", void 0);
__decorate([
    typeorm_1.JoinColumn(),
    typeorm_1.Column({ type: "uuid" }),
    __metadata("design:type", String)
], Cargo.prototype, "id_nivel_acesso", void 0);
__decorate([
    typeorm_1.OneToMany(() => Usuario_1.Usuario, (cargo) => cargo.cargo),
    __metadata("design:type", Promise)
], Cargo.prototype, "usuarios", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Cargo.prototype, "created_at", void 0);
Cargo = __decorate([
    typeorm_1.Entity("cargo"),
    __metadata("design:paramtypes", [])
], Cargo);
exports.Cargo = Cargo;
