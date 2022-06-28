import { Module } from '@nestjs/common';
import { UserService } from './service/user/user.service';
import { RoleService } from './service/role/role.service';
import { PermissionService } from './service/permission/permission.service';
import { FirmService } from './service/firm/firm.service';
import { ElseController } from './controller/else.controller/else.controller';
import { PermissionController } from './controller/permission.controller/permission.controller';
import { UserController } from './controller/user.controller/user.controller';
//import { AuthModule } from './auth/auth.module';


@Module({
  providers: [UserService, RoleService, PermissionService, FirmService, FirmService],
  exports: [UserService],
  controllers: [ UserController, ElseController, PermissionController],
  
})
export class UsersModule {}
