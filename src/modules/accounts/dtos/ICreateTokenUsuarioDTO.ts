interface ICreateTokenUsuarioDTO {
  id_usuario: string;
  expires_date: Date;
  refresh_token: string;
}

export { ICreateTokenUsuarioDTO };
