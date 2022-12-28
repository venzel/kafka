import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

export const mongodbProviders = [
    {
        provide: 'MONGODB_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://payment:payment@localhost:27018/payment'),
    },
];
