import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  OneToOne,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Cargo } from "../../../../cargo/infra/typeorm/entities/Cargo";
import { Igreja } from "../../../../igreja/infra/typeorm/entities/Igreja";

@Entity("usuario")
class Usuario {
  @PrimaryColumn("uuid")
  id_usuario?: string;

  @Column()
  primeiro_nome_usuario: string;

  @Column()
  ultimo_nome_usuario: string;

  @Column()
  email_usuario: string;

  @Column({ nullable: true })
  foto_perfil_usuario: string;

  @Column()
  senha_usuario: string;

  @Column()
  cpf_usuario: string;

  @ManyToOne(() => Cargo, (usuarios) => usuarios.usuarios)
  @JoinColumn({ name: "id_cargo" })
  cargo: Cargo;

  @OneToOne(() => Igreja, (igreja) => igreja.usuario)
  igreja: Igreja;

  @Column()
  id_cargo: string;

  @Column()
  rua_usuario: string;

  @Column()
  bairro_usuario: string;

  @Column()
  cep_usuario: string;

  @Column()
  numero_residencia_usuario: number;

  @Column()
  complemento_residencia_usuario: string;

  @Column()
  cidade_usuario: string;

  @Column()
  estado_usuario: string;

  @Column()
  pais_usuario: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id_usuario) {
      this.id_usuario = uuidv4();
    }
  }
}

export { Usuario };
