import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Permission } from 'src/modules/users/entity/permission.entity';
import { PermissionService } from 'src/modules/users/service/permission/permission.service';

@Controller('permission')
export class PermissionController {
    constructor(private permissionService: PermissionService) {}

       @Get('per')
       async findAllPermission(): Promise<Permission[]>{
           return this.permissionService.findAllPermission()
       }

       @Post()
       async create(@Body() create: Permission){
           this.permissionService.create(create);
       }
    
}
