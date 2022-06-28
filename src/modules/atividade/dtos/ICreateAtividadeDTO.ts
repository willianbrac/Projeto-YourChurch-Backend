interface ICreateAtividadeDTO {
  id_atividade?: string;
  id_tipo_atividade?: string;
  id_igreja?: string;
  data_atividade: Date;
  hora_inicio_atividade: string;
  hora_termino_atividade: string;
  quantidade_visitantes_atividade: number;
  quantidade_membros_atividade: number;
  tema_atividade: string;
  responsavel_atividade: string;
  dizimo_atividade?: number;
  oferta_atividade?: number;
  num_reconciliacao_atividade: number;
  num_decisoes_atividade: number;
  preleitor_atividade: string;
  observacao_atividade: string;
}

export { ICreateAtividadeDTO };
