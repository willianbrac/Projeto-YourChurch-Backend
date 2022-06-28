import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Atividade } from "../../../../atividade/infra/typeorm/entities/Atividade";

@Entity("tipo_atividade")
class TipoAtividade {
  @PrimaryColumn("uuid")
  id_tipo_atividade?: string;

  @Column()
  nome_tipo_atividade: string;

  @Column()
  modalidade_tipo_atividade: string;

  @Column({ type: "tinyint" })
  gera_arrecadacao_tipo_atividade: boolean;

  @Column()
  descricao: string;

  @OneToMany(() => Atividade, (atividade) => atividade.tipoAtividade)
  atividades: Promise<Atividade[]>;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id_tipo_atividade) {
      this.id_tipo_atividade = uuidv4();
    }
  }
}

export { TipoAtividade };
