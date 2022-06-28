import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CreateCargoDTO } from './modules/ModuleTS/dto/createCargo.dto';
import { CreateProblemDTO } from './modules/ModuleTS/dto/createProblems.dto';
import { createReceptionDTO } from './modules/ModuleTS/dto/createReception.dto';
import { CreateTransportDto } from './modules/ModuleTS/dto/createTransport.dto';
import { Reception } from './modules/ModuleTS/entities/Reception.entity';
import { Transport } from './modules/ModuleTS/entities/transport.entity';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService){}

  findAllTS(): Observable<AxiosResponse<Transport[]>> {
      return this.httpService.get('http://localhost:3000/compliet-cargo/TS')
  }

  postCargo(): Observable<AxiosResponse<CreateCargoDTO[]>> {
    return this.httpService.post('http://localhost:3000/compliet-cargo/cargo')
}

  postTS(): Observable<AxiosResponse<CreateTransportDto[]>> {
    return this.httpService.post('http://localhost:3000/compliet-cargo/loadTs')
  }

  postProblem(): Observable<AxiosResponse<CreateProblemDTO[]>> {
    return this.httpService.post('http://localhost:3000/NCM/custom')
  }

  findAllReception(): Observable<AxiosResponse<Reception[]>> {
    return this.httpService.get('http://localhost:3000/reception/priyom')
  }

  getHello(): string {
    return 'Hello World!';
  }


}
