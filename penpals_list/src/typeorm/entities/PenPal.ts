import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * questa classe rappresenta una tabella all'interno del db
 * (la quale configurazione di connessione è specificata nel file app.module)
 * le proprietà rappresentano le colonne della tabella
 */

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