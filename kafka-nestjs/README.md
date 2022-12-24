# NestJs + Kafka

**REFERÊNCIAS:** https://github.com/codeedu/nest-kafka/tree/master/apache-kafka

## Pré requisitos

- NodeJs ^14.15.0 || >=16.10.0, versão corrente 18.12.1
- Npm, versão corrente 8.19.2
- CLI NestJs, versão corrente 9.1.5

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

- Adapter + barrel nos services

## Pacotes utilizados

- KafkaJs

## Para instalar os pacotes e rodar o projeto

```bash
# Instalar os pacotes
yarn install

# Rodar o projeto
yarn start
```
