import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PenPal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    nome: string;

    @Column({ length: 30 })
    cognome: string;

    @Column({ nullable: true })
    compleanno: Date;

    @Column({ nullable: true, default: 0 })
    affinita: number;
}