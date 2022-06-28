import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Igreja } from "../../../../igreja/infra/typeorm/entities/Igreja";
import { TipoAtividade } from "../../../../tipoAtividade/infra/typeorm/entities/TipoAtividade";

@Entity("atividade")
class Atividade {
  @PrimaryColumn("uuid")
  id_atividade?: string;

  @ManyToOne(() => TipoAtividade, (tipoatividade) => tipoatividade.atividades)
  @JoinColumn({ name: "id_tipo_atividade" })
  tipoAtividade: Promise<TipoAtividade>;

  @Column({ nullable: true })
  id_tipo_atividade: string;

  @ManyToOne(() => Igreja, (igreja) => igreja.atividades)
  @JoinColumn({ name: "id_igreja" })
  igreja: Promise<Igreja>;

  @Column({ nullable: true })
  id_igreja: string;

  @Column()
  data_atividade: Date;

  @Column()
  hora_inicio_atividade: string;

  @Column()
  hora_termino_atividade: string;

  @Column()
  quantidade_visitantes_atividade: number;

  @Column()
  quantidade_membros_atividade: number;

  @Column()
  tema_atividade: string;

  @Column()
  responsavel_atividade: string;

  @Column()
  dizimo_atividade: number;

  @Column()
  oferta_atividade: number;

  @Column()
  num_reconciliacao_atividade: number;

  @Column()
  num_decisoes_atividade: number;

  @Column()
  preleitor_atividade: string;

  @Column()
  observacao_atividade: string;

  constructor() {
    if (!this.id_atividade) {
      this.id_atividade = uuidv4();
    }
  }
}

export { Atividade };
