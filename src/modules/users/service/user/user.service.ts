import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/users/entity/user.entity';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
//export type User = {}

@Injectable()
export class UserService {
private readonly users: User[]=[];

async findOne(login: string): Promise<User | undefined> {
    return this.users.find(user => user.Login === login);
}

create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneById(idUser: number) {
    return `This action returns a #${idUser} user`;
  }

  update(idUser: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${idUser} user`;
  }

  remove(idUser: number) {
    return `This action removes a #${idUser} user`;
  }

/*findAllUsers(): User[] {
    return this.users;
}

create(user: User){
    this.users.push(user);
}*/
}
