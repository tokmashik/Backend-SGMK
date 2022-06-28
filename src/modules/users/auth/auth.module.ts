import { Module } from '@nestjs/common';
import{ PassportModule } from '@nestjs/passport'
import { AuthService } from './service/auth.service';
import { UsersModule } from 'src/modules/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.stratege';
import { jwtConstants } from './constants';



@Module({
    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: jwtConstants.secret/*process.env.JWTKEY*/,
        signOptions: { expiresIn: '2 days'}
    })],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
