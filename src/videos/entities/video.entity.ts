import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UseType } from '../types/use-yn.type';

@Entity()
export class Video {
    // id
    @PrimaryGeneratedColumn({ type: 'int', name: '_id' })
    _id: number;

    // image 총 url
    @Column('text', { nullable: true })
    video: string;

    @Column('text', { nullable: true })
    commonPath: string;

    @Column('text', { nullable: true })
    detailPath: string;

    @Column('text', { nullable: true })
    originalFileName: string;

    @Column('text', { nullable: true })
    changeFileName: string;

    @Column()
    extension: string;

    @Column()
    size: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        type: 'enum',
        enum: ['Y', 'N'],
        default: 'Y',
    })
    useYN: UseType;
}
