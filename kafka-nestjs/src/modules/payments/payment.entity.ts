import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payments')
export class Payment extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column()
    amount: number;

    constructor(partial: Partial<Payment>) {
        super();
        Object.assign(this, partial);
    }
}
