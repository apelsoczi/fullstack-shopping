import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {

    @PrimaryGeneratedColumn({})
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ type: 'decimal', nullable: false })
    price: number;

    @Column({ nullable: false })
    stock: number;

}