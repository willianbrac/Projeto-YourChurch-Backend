## NIVEL DE ACESSO

### Cadastro de Nivel de Acesso

**RF** -> Requisitos funcionais
[x] - Deve ser possivel cadastrar um novo nivel de acesso

**RN** -> Regras de negócio
[x] - Não deve ser possível cadastrar um nivel de acesso com um nome já existente.
[x] - Não deve ser possível cadastrar um nivel de acesso com um tipo de acesso já existente.
[x] - Não deve ser possível alterar um nivel de acesso, pois pode afetar o tipo de acesso definido.
[x] - O responsável pelo cadastro de um nível de acesso deve ser um USUARIO_ADMINISTRADOR

### Listagem de Nivel de Acesso

**RF** -> Requisitos funcionais
[x] - Deve ser possivel listar todos os niveis de acesso
[x] - Deve ser possivel listar apenas um nivel de acesso
[x] - Deve ser possivel listar todos os cargos relacionados à um nivel de acesso

**RN** -> Regras de negócio
[x] - Não deve ser possível listar os niveis de acesso sem estar logado no sistema.

### Excluir um Nivel de Acesso

**RF** -> Requisitos funcionais
[x] - Deve ser possivel deletar um nivel de acesso

**RN** -> Regras de negócio
[x] - Não deve ser possível deletar um nivel de acesso que não existe
[x] - O responsável por deletar um nível de acesso deve ser um USUARIO_ADMINISTRADOR

### Listar cargos relacionados à um Nivel de Acesso

**RF** -> Requisitos funcionais
[x] - Deve ser possivel deletar um nivel de acesso

**RN** -> Regras de negócio
[x] - Não deve ser possível deletar um nivel de acesso que não existe
[x] - Não deve ser possível listar os cargos de um nivel de acesso sem estar logado no sistema.


-------------------------------------------------------------------------------------------------

## TIPO DE ATIVIDADE

### Cadastro de Tipo de Atividade

**RF** -> Requisitos funcionais
[x] - Deve ser possivel cadastrar um novo tipo de atividade

**RN** -> Regras de negócio
[x] - Não deve ser possível cadastrar um tipo de atividade com um nome já existente.
[x] - Não deve ser possível cadastrar um tipo de atividade com uma modalidade de atividade já existente.
[x] - O responsável pelo cadastro de um nível de acesso deve ser um USUARIO_ADMINISTRADOR

### Listagem de tipo de atividade

**RF** -> Requisitos funcionais
[x] - Deve ser possivel listar todos os tipos de atividades
[x] - Deve ser possivel listar apenas um tipo de atividade
[] - Deve ser possivel listar todas as atividades relacionadas à um tipo de atividade

**RN** -> Regras de negócio
[x] - Não deve ser possível listar os niveis de acesso sem estar logado no sistema.

### Excluir um tipo de atividade

**RF** -> Requisitos funcionais
[x] - Deve ser possivel deletar um tipo de atividade

**RN** -> Regras de negócio
[x] - Não deve ser possível deletar um tipo de atividade que não existe.
[x] - O responsável por deletar um nível de acesso deve ser um USUARIO_ADMINISTRADOR

-------------------------------------------------------------------------------------------------

## CARGO

### Cadastro de Cargo

**RF** -> Requisitos funcionais
[x] - Deve ser possível cadastrar um novo cargo

**RN** -> Regras de negócio
[x] - Não deve ser possível cadastrar um cargo com um nome já existente
[x] - Não deve ser possível cadastrar um cargo com um nível de acesso que não existe
[x] - Não deve ser possível cadastrar o cargo sem estar logado no sistema.
[x] - O responsável pelo cadastro de um cargo deve ser um USUARIO_ADMINISTRADOR

### Listagem de Cargos

**RF** -> Requisitos funcionais
[x] - Deve ser possível listar um todos os cargos existentes.
[x] - Deve ser possível listar um cargo existente, juntamente com seu nivel de acesso.

**RN** -> Regras de negócio
[x] - Não deve ser possível listar os niveis de acesso sem estar logado no sistema.

### Atualização de cadastro de Cargos

**RF** -> Requisitos funcionais
[x] - Deve ser possível atualizar os campos de nome e descrição de um cargo.

**RN** -> Regras de negócio
[x] - Não deve ser possível atualizar dados de um cadastro que não existe.
[x] - Não deve ser possível atualizar o cargo sem estar logado no sistema.

### Excluir um Cargo

**RF** -> Requisitos funcionais
[x] - Deve ser possivel deletar um cargo

**RN** -> Regras de negócio
[x] - Não deve ser possível deletar um cargo que não existe
[x] - Não deve ser possível excluir o cargo sem estar logado no sistema.
[x] - O responsável por deletar um cargo deve ser um USUARIO_ADMINISTRADOR

### Listagem de todos os usuários com um determinado cargo (OPCIONAL)

**RF** -> Requisitos funcionais
[] - Deve ser possivel listar todos os usuarios de um determinado cargo

**RN** -> Regras de negócio
[] - Não deve ser possível listar usuarios de um cargo que não existe.
[x] - Não deve ser possível listar os usuarios de um determinado cargo sem estar logado no sistema.
[] - O responsável por listar os usuarios de um determinado cargo deve ser um USUARIO_ADMINISTRADOR

-------------------------------------------------------------------------------------------------

## USUARIO

### Cadastro de usuario

**RF** -> Requisitos funcionais
[x] - Deve ser possivel cadastrar um novo usuario

**RN** -> Regras de negócio
[x] - Não deve ser possível cadastrar um usuario com um primeiro nome já existente.
[x] - Não deve ser possível cadastrar um usuario com um segundo nome já existente.
[x] - Não deve ser possível cadastrar um usuario com um email já existente.
[x] - Não deve ser possível cadastrar um usuario com um CPF já existente.
[x] - Não deve ser possível cadastrar um usuario com um cargo inexistente.
[x] - Não deve ser possível cadastrar o usuario sem estar logado no sistema.
[] - O responsável pelo cadastro de um usuario deve ser um USUARIO_ADMINISTRADOR

### Listagem de usuario

**RF** -> Requisitos funcionais
[x] - Deve ser possivel listar todos os usuarios
[] - Deve ser possivel listar apenas um usuario, com seu nivel de acesso e igreja que é responsável.

**RN** -> Regras de negócio
[] - Não deve ser possível listar um usuario sem existir um nivel acesso atribuído à ele.
[] - Não deve ser possível listar um usuario sem existir uma igreja atribuída à ele.
[x] - Não deve ser possível listar um usuario sem estar logado no sistema.
[] - O responsável por deletar um usuario deve ser um USUARIO_ADMINISTRADOR

### Excluir um usuario

**RF** -> Requisitos funcionais
[x] - Deve ser possivel deletar um usuario

**RN** -> Regras de negócio
[x] - Não deve ser possível deletar um usuario que não existe.
[x] - O responsável por deletar um nível de acesso deve ser um USUARIO_ADMINISTRADOR
[x] - Não deve ser possível excluuir o usuario sem estar logado no sistema.

-------------------------------------------------------------------------------------------------