import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TSModule } from './modules/ModuleTS/TS.module';
import { UsersModule } from './modules/users/users.module';
import { AuthService } from './modules/users/auth/service/auth.service';
import { AuthModule } from './modules/users/auth/auth.module';
import { UserService } from './modules/users/service/user/user.service';
import { AController } from './.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from './httpConfigService';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'priemka',
      entities: ['*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TSModule,
    UsersModule,
    AuthModule,
    HttpModule.registerAsync({
      useClass: HttpConfigService
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController, AController],
  providers: [AppService, UserService, AuthService, JwtService],
})
export class AppModule {}
