import { Body, Controller, Get, Post } from '@nestjs/common';
import { convertCargo, CreateCargoDTO } from '../dto/createCargo.dto';
import { convertTS, CreateTransportDto } from '../dto/createTransport.dto';
import { Cargo } from '../entities/cargo.entity';
import { Transport } from '../entities/transport.entity';
import { ComplietCargoService } from '../Services/compliet-cargo/compliet-cargo.service';

@Controller('compliet-cargo')
export class ComplietCargoController {
  constructor(private complieteCargoService: ComplietCargoService) {}

  @Get('TS')
  async findAllTS(): Promise<Array<Transport>> {
    const ts = this.complieteCargoService.findAllTS();
    return ts
  }

  @Post('cargo')
  async CreateCargo(
    @Body() Cargo: Array<CreateCargoDTO>
  ): Promise<Array<Cargo>> {
    return this.complieteCargoService.createCargo(convertCargo(Cargo));
  }

  /**
   * API для загрузки ТС
   */
  @Post('loadTs')
  async loadTransport(
    @Body() transport: Array<CreateTransportDto>,
  ): Promise<Array<Transport>> {
    return this.complieteCargoService.addTransport(convertTS(transport));
  }

 /* @Post('TS')
  async CreateTS(
    @Body() createTS: Array<Transport>,
    cargo: Cargo,
    pro: Problem[],
  ) {
    // this.complieteCargo.createTS(createTS, cargo, pro);
  }*/
}
