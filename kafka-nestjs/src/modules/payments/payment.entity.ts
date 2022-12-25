import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column()
    value: number;

    constructor(partial: Partial<Payment>) {
        super();
        Object.assign(this, partial);
    }
}
