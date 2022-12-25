import { DataSource } from 'typeorm';

export const typeormProviders = [
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
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
