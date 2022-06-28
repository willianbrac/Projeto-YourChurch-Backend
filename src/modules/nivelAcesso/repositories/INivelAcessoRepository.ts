import { NivelAcesso } from "../infra/typeorm/entities/NivelAcesso";

interface ICreateNivelAcessoDTO {
  id_nivel_acesso?: string;
  titulo_nivel_acesso: string;
  tipo_nivel_acesso: number;
  descricao: string;
}

interface INivelAcessoRepository {
  findByName(titulo_nivel_acesso: string): Promise<NivelAcesso>;
  findByTipoAcesso(tipo_nivel_acesso: number): Promise<NivelAcesso>;
  listUniqueNivelAcesso(id: string): Promise<NivelAcesso>;
  delete(id: string): Promise<void>;
  list(): Promise<NivelAcesso[]>;
  create({
    id_nivel_acesso,
    titulo_nivel_acesso,
    tipo_nivel_acesso,
    descricao,
  }: ICreateNivelAcessoDTO): Promise<void>;

  update({
    id_nivel_acesso,
    titulo_nivel_acesso,
    tipo_nivel_acesso,
    descricao,
  }: ICreateNivelAcessoDTO): Promise<NivelAcesso>;
}

export { INivelAcessoRepository, ICreateNivelAcessoDTO };
