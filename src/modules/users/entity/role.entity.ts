import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { Permission } from "./permission.entity"

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    idRole: number

    @Column()
    Description: string

    @ManyToMany(() => Permission, (permission) => permission.role)
    permission: Permission[]
    
}