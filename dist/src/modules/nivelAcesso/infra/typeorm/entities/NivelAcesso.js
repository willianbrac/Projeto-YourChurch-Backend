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
exports.NivelAcesso = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Cargo_1 = require("../../../../cargo/infra/typeorm/entities/Cargo");
let NivelAcesso = class NivelAcesso {
    constructor() {
        if (!this.id_nivel_acesso) {
            this.id_nivel_acesso = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], NivelAcesso.prototype, "id_nivel_acesso", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], NivelAcesso.prototype, "titulo_nivel_acesso", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NivelAcesso.prototype, "tipo_nivel_acesso", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], NivelAcesso.prototype, "descricao", void 0);
__decorate([
    typeorm_1.OneToMany(() => Cargo_1.Cargo, (cargo) => cargo.nivelAcesso),
    __metadata("design:type", Promise)
], NivelAcesso.prototype, "cargos", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], NivelAcesso.prototype, "created_at", void 0);
NivelAcesso = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], NivelAcesso);
exports.NivelAcesso = NivelAcesso;
