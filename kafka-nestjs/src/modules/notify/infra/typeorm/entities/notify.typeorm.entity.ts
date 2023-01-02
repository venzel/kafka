import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { NotifyEntityInterface } from '../../../entities/notify.entity.interface';

@Entity('notifies')
export class NotifyTypeormEntity extends BaseEntity implements NotifyEntityInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    message: string;
}
