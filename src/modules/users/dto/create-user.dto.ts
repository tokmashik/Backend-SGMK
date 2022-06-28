
import { IsNumber, IsString } from "class-validator";
export class CreateUserDto {
   
    @IsNumber()
    idUser: number

    @IsString()
    FIO: string

    @IsString()
    Login: string

    @IsString()
    Password: string

    @IsNumber() //?
    permission: number
}
