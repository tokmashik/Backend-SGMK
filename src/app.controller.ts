import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './modules/users/auth/local-auth.gard';
import { AuthService } from './modules/users/auth/service/auth.service';
import { JwtAuthGuard } from './modules/users/auth/service/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService ) {}

 @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req):any {
    return this.authService.login(req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }

  @Get('a')
  w(){
    console.log('str', 'oka')
    return 's'
  }

}
