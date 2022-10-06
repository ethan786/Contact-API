import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contacts')
export class contactsEntity {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    name : string;
    @Column()
    phone : number;
    @Column()
    address : string;
    @Column()
    email : string;
    @Column()
    notes : string;
}