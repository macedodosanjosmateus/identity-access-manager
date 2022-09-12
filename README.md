# NestJS StartKit

## Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] `<task>`

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão `nodejs16`
- Você instalou a versão mais recente de `yarn`
- Você tem uma máquina `<Windows / Linux / Mac>`

## ☕ Clonando e Instalando `<nestjs-starkit>`

Para clonar o repositório `<nestjs-starkit>`, siga estas etapas:

```bash
git clone https://github.com/mateusmacedo/nestjs-startkit.git
```

Para instalar as dependências `<nestjs-starkit>`, siga estas etapas:

```bash
yarn install
```

## ⚙️ Configurando ambiente `<nestjs-starkit>`

Utilizar o arquivo `example.env` como base para a criação dos seguintes arquivos de configuração:

- `.env`
- `test.env`

> Para as configurações dos módulos definir `src/<module>/configs/<module>.config.ts`, seguindo `src/common/configs/app.config.ts` como base.

## 🚀 Usando `<nestjs-starkit>`

Para usar `<nestjs-starkit>`, siga estas etapas:

```bash
# Unix users

# development
$ yarn start

# watch mode
$ yarn start:dev

# debug watch mode
$ yarn start:debug
```

## Testes

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Gerando arquivo de change log

```bash
yarn changelog # only changelog file
yarn changelog:minor # x.y.x
yarn changelog:major # y.x.x
yarn changelog:patch # x.x.y
yarn changelog:alpha # x.x.x-alpha.0
```
