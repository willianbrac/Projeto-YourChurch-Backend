interface ICreateIgrejaDTO {
  id_igreja?: string;
  nome_igreja: string;
  cnpj_igreja: string;
  logo_igreja?: string;
  isMatriz: boolean;
  quantidade_membro_igreja: number;
  rua_igreja: string;
  bairro_igreja: string;
  cep_igreja: string;
  numero_residencia_igreja: number;
  complemento_residencia_igreja: string;
  id_usuario?: string;
  cidade_igreja: string;
  estado_igreja: string;
  pais_igreja: string;
  id_igreja_matriz?: string;
}

export { ICreateIgrejaDTO };
