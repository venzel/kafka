# Kafka-Python

👉 [Geração do cluster](../kafka-cluster/README.md)<br />
👉 [Pré requisito e instalações](install.md)

## Produtor

Criando o produtor e enviando mensagens para o tópico 'meutopico'

```python
from kafka import KafkaProducer as kp
import random

productor = kp(bootstrap_servers="127.0.0.1:29092")

for i in range(10):
    n = random.random()
    productor.send("meutopico", key=b"chave: %d" %i, value=b"mensagem: %f" %n)
```

## Consumidor

```python
from kafka import KafkaConsumer as kc

consumer = kc("meutopico", bootstrap_servers="127.0.0.1:29092", consumer_timeout_ms=10000, group_id="a")

for message in consumer:
    print("Tópico:", message.topic)
    print("Partição:", message.partition)
    print("Offset:", message.offset)
    print("Chave:", message.key)
    print("Valor:", message.value)
    print("---------------------")
```

### Criando um consumidor no console para o tópico 'meutopico' com grupo 'a'

```bash
kafka-console-consumer --bootstrap-server localhost:29092 --topic meutopico --group a
```
