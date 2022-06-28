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
exports.TokensUsuarios = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Usuario_1 = require("./Usuario");
let TokensUsuarios = class TokensUsuarios {
    constructor() {
        if (!this.id_users_tokens) {
            this.id_users_tokens = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn("uuid"),
    __metadata("design:type", String)
], TokensUsuarios.prototype, "id_users_tokens", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TokensUsuarios.prototype, "refresh_token", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TokensUsuarios.prototype, "id_usuario", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Usuario_1.Usuario),
    typeorm_1.JoinColumn({ name: "id_usuario" }),
    __metadata("design:type", Usuario_1.Usuario)
], TokensUsuarios.prototype, "usuario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TokensUsuarios.prototype, "expires_date", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], TokensUsuarios.prototype, "created_at", void 0);
TokensUsuarios = __decorate([
    typeorm_1.Entity("users_tokens"),
    __metadata("design:paramtypes", [])
], TokensUsuarios);
exports.TokensUsuarios = TokensUsuarios;
