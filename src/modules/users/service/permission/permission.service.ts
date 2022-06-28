import { Injectable } from '@nestjs/common';
import { Permission } from 'src/modules/users/entity/permission.entity';

@Injectable()
export class PermissionService {
private readonly permission: Permission[] = [];

findAllPermission(): Permission[] {
    return this.permission;
}

create(permission: Permission){
    this.permission.push(permission);
}
}



