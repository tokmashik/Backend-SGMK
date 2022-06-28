import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Firm } from 'src/modules/users/entity/firm.entity';
import { Role } from 'src/modules/users/entity/role.entity';
import { FirmService } from 'src/modules/users/service/firm/firm.service';
import { RoleService } from 'src/modules/users/service/role/role.service';


@Controller('else')
export class ElseController {
    constructor(private firmService: FirmService, private role: RoleService){}

    @Get('fir')
    async findAllFirm(): Promise<Firm[]>{
        return this.firmService.findAllFirm()
    }

    @Post()
    async createFirm(@Body() createFirm: Firm){
        this.firmService.createFirm(createFirm);
    }
    
    @Get('rol')
    async findAllRole(): Promise<Role[]> {
        return this.role.findAllRole()
    }

    @Post()
    async createRole(@Body() createRole: Role){
        this.role.createRole(createRole);
    }
}
