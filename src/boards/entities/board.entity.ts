import {
    AfterInsert,
    AfterRemove,
    AfterUpdate,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UseType } from '../types/use-yn.type';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    category: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column('datetime', {
        name: 'createdAt',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column('datetime', {
        name: 'updatedAt',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    @Column('datetime', { name: 'deletedAt', nullable: true })
    deletedAt: Date | null;

    @Column({
        type: 'enum',
        enum: ['Y', 'N'],
        default: 'Y',
    })
    useYN: UseType;

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id', this._id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated User with id', this._id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed User with id', this._id);
    }
}
