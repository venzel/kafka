import express from 'express';
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['127.0.0.1:19092', '127.0.0.1:29092', '127.0.0.1:39092'],
    retry: {
        initialRetryTime: 300,
        retries: 10,
    },
});

const producer = kafka.producer();

const consumer = kafka.consumer({ groupId: 'consumerApi' });

const app = express();

app.use(express.json());

app.use((req, _, next) => {
    req.producer = producer;
    req.consumer = consumer;

    return next();
});

const run = async () => {
    await producer.connect();
    await consumer.connect();

    await consumer.subscribe({ topic: 'meutopico', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const { offset, key, value } = message;

            console.log({
                topic,
                partition,
                offset,
                key: key.toString(),
                value: JSON.parse(value),
            });
        },
    });
};

run().catch((e) => console.error(e));

app.get('/send', async (req, res) => {
    const payload = {
        name: 'Tiago',
        age: 22,
    };

    await req.producer.send({
        topic: 'meutopico',
        messages: [{ key: 'gamer', value: JSON.stringify(payload) }],
    });

    res.json({ messageSend: true });
});

module.exports = app;
