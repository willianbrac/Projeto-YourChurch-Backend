import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Usuario } from "../../../../accounts/infra/typeorm/entities/Usuario";
import { NivelAcesso } from "../../../../nivelAcesso/infra/typeorm/entities/NivelAcesso";

@Entity("cargo")
class Cargo {
  @PrimaryColumn("uuid")
  id_cargo?: string;

  @Column()
  nome_cargo: string;

  @Column()
  descricao: string;

  @ManyToOne(() => NivelAcesso, (cargos) => cargos.cargos)
  @JoinColumn({ name: "id_nivel_acesso" })
  nivelAcesso: Promise<NivelAcesso>;

  @JoinColumn()
  @Column({ type: "uuid" })
  id_nivel_acesso: string;

  @OneToMany(() => Usuario, (cargo) => cargo.cargo)
  usuarios: Promise<Usuario[]>;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id_cargo) {
      this.id_cargo = uuidv4();
    }
  }
}

export { Cargo };
