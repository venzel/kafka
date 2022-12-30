import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { NotifyEntity } from './notify.entity';

@Entity('notifies')
export class PostgresNotifyEntity extends BaseEntity implements NotifyEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    message: string;
}
