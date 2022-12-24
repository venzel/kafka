# Kafka-cluster

Criando o tópico, produzindo e consumindo.

**EXEMPLOS NO CONFLUENT:** https://github.com/confluentinc/cp-docker-images/tree/5.3.3-post/examples

## Subindo os containers

```bash
docker-compose up -d
```

## Acessando o container para criar o tópico

```bash
docker exec -it kafka-cluster_kafka-1_1 bash
```

## Tópico

## Listando os tópicos existentes

```bash
kafka-topics --list --bootstrap-server localhost:29092
```

### Criando o tópico

```bash
kafka-topics --create --bootstrap-server localhost:29092 --replication-factor 3 --partitions 3 --topic meutopico
```

### Exibindo informações do tópico, partições, líderes e réplicas

```bash
kafka-topics --describe --bootstrap-server localhost:29092 --topic meutopico
```

## Exibindo informações sobre os clients conetados, patições, offset e lag

```bash
kafka-consumer-groups --describe --bootstra-server locahost:29092 --group consumerApi
```

## Produtor

### Criando um produtor para um tópico existente (meutopico)

```bash
kafka-console-producer --broker-list localhost:29092 --topic meutopico
```

## Consumidor

### Criando um consumidor para um tópico existente (meutopico)

```bash
# --from-beginning (pega as mensagens do início do tópico criado)
kafka-console-consumer --bootstrap-server localhost:29092 --topic meutopico
```

### Criando um consumidor para o tópico existente com grupo

```bash
kafka-console-consumer --bootstrap-server localhost:29092 --topic meutopico --group consumerApi
```

Documento por Enéas Almeida, conteúdo de estudo Wesley Willians
