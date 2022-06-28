interface IUpdateUsuarioDTO {
  primeiro_nome_usuario: string;
  ultimo_nome_usuario: string;
  email_usuario: string;
  senha_usuario: string;
  cpf_usuario: string;
  id_cargo: string;
  rua_usuario: string;
  bairro_usuario: string;
  cep_usuario: string;
  numero_residencia_usuario: number;
  complemento_residencia_usuario: string;
  cidade_usuario: string;
  estado_usuario: string;
  pais_usuario: string;
  id_usuario?: string;
  foto_perfil_usuario?: string;
}

export { IUpdateUsuarioDTO };

// primeiro_nome_usuario,
// ultimo_nome_usuario,
// email_usuario,
// username,
// senha_usuario,
// cpf_usuario,
// rua_usuario,
// bairro_usuario,
// cep_usuario,
// numero_residencia_usuario,
// complemento_residencia_usuario,
// cidade_usuario,
// estado_usuario,
// pais_usuario,
