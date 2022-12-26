import { DataSource } from 'typeorm';
import { Payment } from './payment.entity';

export const paymentProviders = [
    {
        provide: 'PAYMENT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Payment),
        inject: ['DATA_SOURCE'],
    },
];
