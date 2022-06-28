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
exports.Atividade = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Igreja_1 = require("../../../../igreja/infra/typeorm/entities/Igreja");
const TipoAtividade_1 = require("../../../../tipoAtividade/infra/typeorm/entities/TipoAtividade");
let Atividade = class Atividade {
    constructor() {
        if (!this.id_atividade) {
            this.id_atividade = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], Atividade.prototype, "id_atividade", void 0);
__decorate([
    typeorm_1.ManyToOne(() => TipoAtividade_1.TipoAtividade, (tipoatividade) => tipoatividade.atividades),
    typeorm_1.JoinColumn({ name: "id_tipo_atividade" }),
    __metadata("design:type", Promise)
], Atividade.prototype, "tipoAtividade", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Atividade.prototype, "id_tipo_atividade", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Igreja_1.Igreja, (igreja) => igreja.atividades),
    typeorm_1.JoinColumn({ name: "id_igreja" }),
    __metadata("design:type", Promise)
], Atividade.prototype, "igreja", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Atividade.prototype, "id_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Atividade.prototype, "data_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "hora_inicio_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "hora_termino_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "quantidade_visitantes_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "quantidade_membros_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "tema_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "responsavel_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "dizimo_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "oferta_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "num_reconciliacao_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "num_decisoes_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "preleitor_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "observacao_atividade", void 0);
Atividade = __decorate([
    typeorm_1.Entity("atividade"),
    __metadata("design:paramtypes", [])
], Atividade);
exports.Atividade = Atividade;
