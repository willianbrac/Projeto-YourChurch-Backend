import { container } from "tsyringe";

import { TokensUsuariosRepository } from "../../modules/accounts/infra/typeorm/repositories/TokensUsuariosRepository";
import { UsuarioRepository } from "../../modules/accounts/infra/typeorm/repositories/UsuarioRepository";
import { ITokensUsuariosRepository } from "../../modules/accounts/repositories/ITokensUsuariosRepository";
import { IUsuarioRepository } from "../../modules/accounts/repositories/IUsuarioRepository";
import { AtividadeRepository } from "../../modules/atividade/infra/typeorm/repositories/AtividadeRepository";
import { IAtividadeRepository } from "../../modules/atividade/repositories/IAtividadeRepository";
import { CargoRepository } from "../../modules/cargo/infra/typeorm/repositories/CargoRepository";
import { ICargoRepository } from "../../modules/cargo/repositories/ICargoRepository";
import { IgrejaRepository } from "../../modules/igreja/infra/typeorm/repositories/IgrejaRepository";
import { IIgrejaRepository } from "../../modules/igreja/repositories/IIgrejaRepository";
import { NivelAcessoRepository } from "../../modules/nivelAcesso/infra/typeorm/repositories/NivelAcessoRepository";
import { INivelAcessoRepository } from "../../modules/nivelAcesso/repositories/INivelAcessoRepository";
import { TipoAtividadeRepository } from "../../modules/tipoAtividade/infra/typeorm/repositories/TipoAtividadeRepository";
import { ITipoAtividadeRepository } from "../../modules/tipoAtividade/repositories/ITipoAtividadeRepository";

container.registerSingleton<INivelAcessoRepository>(
  "NivelAcessoRepository",
  NivelAcessoRepository
);

container.registerSingleton<ITipoAtividadeRepository>(
  "TipoAtividadeRepository",
  TipoAtividadeRepository
);

container.registerSingleton<IUsuarioRepository>(
  "UsuarioRepository",
  UsuarioRepository
);

container.registerSingleton<ICargoRepository>(
  "CargoRepository",
  CargoRepository
);

container.registerSingleton<IIgrejaRepository>(
  "IgrejaRepository",
  IgrejaRepository
);

container.registerSingleton<IAtividadeRepository>(
  "AtividadeRepository",
  AtividadeRepository
);

container.registerSingleton<ITokensUsuariosRepository>(
  "TokensUsuariosRepository",
  TokensUsuariosRepository
);
