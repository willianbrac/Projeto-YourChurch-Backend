import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Usuario } from "../../../../accounts/infra/typeorm/entities/Usuario";
import { Atividade } from "../../../../atividade/infra/typeorm/entities/Atividade";

@Entity("igreja")
class Igreja {
  @PrimaryColumn("uuid")
  id_igreja?: string;

  @OneToMany(() => Igreja, (igreja) => igreja.igrejas)
  @JoinColumn({ name: "id_igreja" })
  igrejas: Promise<Igreja>;

  @Column()
  nome_igreja: string;

  @Column()
  cnpj_igreja: string;

  @Column({ nullable: true })
  logo_igreja: string;

  @Column({ type: "tinyint" })
  isMatriz: boolean;

  @Column()
  quantidade_membro_igreja: number;

  @Column()
  rua_igreja: string;

  @Column()
  bairro_igreja: string;

  @Column()
  cep_igreja: string;

  @Column({ type: "int" })
  numero_residencia_igreja: number;

  @Column()
  complemento_residencia_igreja: string;

  @OneToOne(() => Usuario, (usuario) => usuario.igreja)
  @JoinColumn({ name: "id_usuario" })
  usuario: Promise<Usuario>;

  @OneToMany(() => Atividade, (atividade) => atividade.igreja)
  atividades: Promise<Atividade[]>;

  @Column({ nullable: true })
  id_usuario: string;

  @Column()
  cidade_igreja: string;

  @Column()
  estado_igreja: string;

  @Column()
  pais_igreja: string;

  @ManyToOne(() => Igreja)
  @JoinColumn({ name: "id_igreja_matriz" })
  igrejaMatriz: Igreja;

  @Column()
  id_igreja_matriz: string;

  @Column({ type: "timestamp" })
  created_at: Date;

  constructor() {
    if (!this.id_igreja) {
      this.id_igreja = uuidv4();
    }
  }
}

export { Igreja };
