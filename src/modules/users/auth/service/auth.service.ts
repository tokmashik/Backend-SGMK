import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/users/service/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private readonly jwtService: JwtService) {}

    async validateUser(login: string, password: string):Promise<any> {

      //const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, 10 /*saltOrRounds*/);
              const user = await this.userService.findOne(login);
              console.log(user.Password, hash)
        if (user && user.Password === hash) {
            const { Password, Login, ...rest } = user;

            return user;
    }
    return null;
}

async login(user: any) {
    const payload = {login: user.login, sub: user.idUser}

    return {
        access_token: this.jwtService.sign(payload)
    };
}
}

/* async validateUser(login: string, password: string):Promise<any> {
        const user = await this.userService.findOne(login);
        if (user && user.Password === password) {
            const { Password, Login, ...rest } = user;
            return user;
    }
    return null;
} */
