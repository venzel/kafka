# NestJs + Kafka

**Referências:**

[Wesley Williams - Fullcycle](https://github.com/codeedu/nest-kafka/tree/master/apache-kafka)<br />
[Iago Maia - Medium](https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c)<br />
[Imersão Fullcycle](https://github.com/codeedu/live-imersao-fullcycle8-nestjs-clean-architecture)

## 👤 Autores

| Foto                                      | Nome                                        | Ativo | Dt. inativo | Atribuições                             |
| ----------------------------------------- | ------------------------------------------- | ----- | ----------- | --------------------------------------- |
| ![Enéas](./media/images/venzel-thumb.png) | [Enéas Almeida](https://github.com/venzel/) | 🔥    | -           | Manager, Arquiteto, FullStack Developer |

## Pré requisitos

-   NodeJs ^14.15.0 || >=16.10.0, versão corrente 18.12.1
-   Npm, versão corrente 8.19.2
-   CLI NestJs, versão corrente 9.1.5

## Instalar o CLI do NestJs

```bash
npm install -g @nestjs/cli
```

## Inicializar um projeto com NestJs

```bash
nest new kafka-nestjs
```

## Criar um módulo completo

```bash
# --no-spec impede de criar os arquivos de test
nest g res payments --no-spec
```

## Técnicas utilizadas

-   Adapter + barrel nos services
-   Docker
-   Logger
-   Interceptors
-   ORM

## Pacotes utilizados

-   kafkajs
-   @nestjs/axios
-   nest-winston
-   winston
-   @nestjs/config
-   @nestjs/typeorm
-   typeorm
-   pg
-   mongoose
-   class-validator
-   class-transformer
-   @swc/jest -D
-   @swc/core -D

## Para instalar os pacotes e rodar o projeto

```bash
# Instalar os pacotes
yarn install

# Rodar o projeto
yarn start:dev
```
