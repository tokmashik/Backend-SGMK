import { Entity, PrimaryGeneratedColumn, Column,  ManyToMany } from "typeorm"
import { Permission } from "./permission.entity"
import { BeforeInsert } from "typeorm"
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    idUser: number

    @Column()
    FIO: string

    @Column()
    Login: string

    @Column()
    Password: string

    @ManyToMany(() => Permission, (permission) => permission.user)
    permission: Permission[]

    /*@BeforeInsert()
    async hashPassword() {
       this.Password = await bcrypt.hash(this.Password, Number(process.env.HASH_SALT));
    }*/
    
    @BeforeInsert()
    async HashPassword() {
      this.Password = await bcrypt.hash(this.Password, 10);
    }
  
    async comparePassword(attempt: string) {
      return await bcrypt.compare(attempt, this.Password);
    }
}