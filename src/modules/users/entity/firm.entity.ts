import { Entity, PrimaryGeneratedColumn, Column,  ManyToMany } from "typeorm"
import { Permission } from "./permission.entity" 

@Entity()
export class Firm {

    @PrimaryGeneratedColumn()
    idFirm: number

    @Column()
    Name: string

    @ManyToMany(() => Permission, (permission) => permission.firm)
    permission: Permission[]
}