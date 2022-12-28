import mongoose from 'mongoose';
import { mongodbConfig as mg } from '../configs';

mongoose.set('strictQuery', false);

export const mongodbProviders = [
    {
        provide: 'MONGODB_CONNECTION',
        useFactory: (): Promise<typeof mongoose> => {
            const mongo = {
                USER: mg.MONGODB_USER,
                PASS: mg.MONGODB_PASSWORD,
                HOST: mg.MONGODB_HOST,
                PORT: mg.MONGODB_PORT,
                DB_NAME: mg.MONGODB_DB_NAME,
            };

            return mongoose.connect(
                `mongodb://${mongo.USER}:${mongo.PASS}@${mongo.HOST}:${mongo.PORT}/${mongo.DB_NAME}`,
            );
        },
    },
];
