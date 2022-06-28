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
exports.TipoAtividade = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Atividade_1 = require("../../../../atividade/infra/typeorm/entities/Atividade");
let TipoAtividade = class TipoAtividade {
    constructor() {
        if (!this.id_tipo_atividade) {
            this.id_tipo_atividade = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], TipoAtividade.prototype, "id_tipo_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TipoAtividade.prototype, "nome_tipo_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TipoAtividade.prototype, "modalidade_tipo_atividade", void 0);
__decorate([
    typeorm_1.Column({ type: "tinyint" }),
    __metadata("design:type", Boolean)
], TipoAtividade.prototype, "gera_arrecadacao_tipo_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TipoAtividade.prototype, "descricao", void 0);
__decorate([
    typeorm_1.OneToMany(() => Atividade_1.Atividade, (atividade) => atividade.tipoAtividade),
    __metadata("design:type", Promise)
], TipoAtividade.prototype, "atividades", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], TipoAtividade.prototype, "created_at", void 0);
TipoAtividade = __decorate([
    typeorm_1.Entity("tipo_atividade"),
    __metadata("design:paramtypes", [])
], TipoAtividade);
exports.TipoAtividade = TipoAtividade;
