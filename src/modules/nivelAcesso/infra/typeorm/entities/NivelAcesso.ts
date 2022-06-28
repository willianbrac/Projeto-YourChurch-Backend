import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Cargo } from "../../../../cargo/infra/typeorm/entities/Cargo";

@Entity()
class NivelAcesso {
  @PrimaryColumn("uuid")
  id_nivel_acesso?: string;

  @Column()
  titulo_nivel_acesso: string;

  @Column()
  tipo_nivel_acesso: number;

  @Column()
  descricao: string;

  @OneToMany(() => Cargo, (cargo) => cargo.nivelAcesso)
  cargos: Promise<Cargo[]>;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id_nivel_acesso) {
      this.id_nivel_acesso = uuidv4();
    }
  }
}

export { NivelAcesso };
