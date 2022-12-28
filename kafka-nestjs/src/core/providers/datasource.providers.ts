import mongoose from 'mongoose';
import { DataSource } from 'typeorm';

mongoose.set('strictQuery', false);

export const datasourceProviders = [
    {
        provide: 'POSTGRES_CONNECTION',
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
];
