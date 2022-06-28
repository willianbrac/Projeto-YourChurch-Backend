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
var Igreja_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Igreja = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Usuario_1 = require("../../../../accounts/infra/typeorm/entities/Usuario");
const Atividade_1 = require("../../../../atividade/infra/typeorm/entities/Atividade");
let Igreja = Igreja_1 = class Igreja {
    constructor() {
        if (!this.id_igreja) {
            this.id_igreja = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], Igreja.prototype, "id_igreja", void 0);
__decorate([
    typeorm_1.OneToMany(() => Igreja_1, (igreja) => igreja.igrejas),
    typeorm_1.JoinColumn({ name: "id_igreja" }),
    __metadata("design:type", Promise)
], Igreja.prototype, "igrejas", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "nome_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "cnpj_igreja", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Igreja.prototype, "logo_igreja", void 0);
__decorate([
    typeorm_1.Column({ type: "tinyint" }),
    __metadata("design:type", Boolean)
], Igreja.prototype, "isMatriz", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Igreja.prototype, "quantidade_membro_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "rua_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "bairro_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "cep_igreja", void 0);
__decorate([
    typeorm_1.Column({ type: "int" }),
    __metadata("design:type", Number)
], Igreja.prototype, "numero_residencia_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "complemento_residencia_igreja", void 0);
__decorate([
    typeorm_1.OneToOne(() => Usuario_1.Usuario, (usuario) => usuario.igreja),
    typeorm_1.JoinColumn({ name: "id_usuario" }),
    __metadata("design:type", Promise)
], Igreja.prototype, "usuario", void 0);
__decorate([
    typeorm_1.OneToMany(() => Atividade_1.Atividade, (atividade) => atividade.igreja),
    __metadata("design:type", Promise)
], Igreja.prototype, "atividades", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Igreja.prototype, "id_usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "cidade_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "estado_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "pais_igreja", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Igreja_1),
    typeorm_1.JoinColumn({ name: "id_igreja_matriz" }),
    __metadata("design:type", Igreja)
], Igreja.prototype, "igrejaMatriz", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "id_igreja_matriz", void 0);
__decorate([
    typeorm_1.Column({ type: "timestamp" }),
    __metadata("design:type", Date)
], Igreja.prototype, "created_at", void 0);
Igreja = Igreja_1 = __decorate([
    typeorm_1.Entity("igreja"),
    __metadata("design:paramtypes", [])
], Igreja);
exports.Igreja = Igreja;
