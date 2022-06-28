import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Usuario } from "./Usuario";

@Entity("users_tokens")
class TokensUsuarios {
  @PrimaryColumn("uuid")
  id_users_tokens: string;

  @Column()
  refresh_token: string;

  @Column()
  id_usuario: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: "id_usuario" })
  usuario: Usuario;

  @Column()
  expires_date: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id_users_tokens) {
      this.id_users_tokens = uuidv4();
    }
  }
}

export { TokensUsuarios };
