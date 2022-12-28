import mongoose from 'mongoose';
import { mongodbConfig as mg } from '../configs';

mongoose.set('strictQuery', false);

export const mongodbProviders = [
    {
        provide: 'MONGODB_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(
                `mongodb://${mg.MONGODBB_USER}:${mg.MONGODBB_PASSWORD}@${mg.MONGODBB_HOST}:${mg.MONGODBB_PORT}/${mg.MONGODBB_DB_NAME}`,
            ),
    },
];
