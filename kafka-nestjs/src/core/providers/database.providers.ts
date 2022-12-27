import mongoose from 'mongoose';
import { DataSource } from 'typeorm';

mongoose.set('strictQuery', false);

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'payment',
                password: 'payment',
                database: 'payment',
                entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
                synchronize: true,
                connectTimeoutMS: 3000,
            });

            return dataSource.initialize();
        },
    },
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://payment:payment@localhost:27018/payment'),
    },
];
