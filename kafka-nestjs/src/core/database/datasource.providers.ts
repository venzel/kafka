import { DataSource } from 'typeorm';
import { postgresConfig as pg } from '../configs/configs.barrel';

export const datasourceProviders = [
    {
        provide: 'TYPEORM_CONNECTION',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: pg.POSTGRES_HOST,
                port: pg.POSTGRES_PORT,
                username: pg.POSTGRES_USER,
                password: pg.POSTGRES_PASSWORD,
                database: pg.POSTGRES_DB_NAME,
                entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
                synchronize: true,
                connectTimeoutMS: 3000,
            });

            return dataSource.initialize();
        },
    },
];
