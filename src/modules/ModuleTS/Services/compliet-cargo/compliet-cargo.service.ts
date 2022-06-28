import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from '../../entities/cargo.entity';
import { Transport } from '../../entities/transport.entity';

@Injectable()
export class ComplietCargoService {
  constructor(
    @InjectRepository(Transport)
    private readonly transportRepository: Repository<Transport>,
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
  ) {}

  async findAllTS(): Promise<Transport[]> {
    return this.transportRepository.find({ relations: ['cargo'] });
  }

  async createCargo(cargo: Array<Cargo>): Promise<Cargo[]> {
   const getKey = (cargo: Cargo) => `${cargo.id}`;
   try {
     const douple = await this.cargoRepository.find({
       where: cargo.map((item) =>{
         return{
           id: item.id,
         }
       })
     })

     const doupleFilter = new Set<string>(douple.map((item) => getKey(item)));
     const filteredCargo = cargo.filter(
       (item) => !doupleFilter.has(getKey(item)),
     );
     
     if (!filteredCargo.length) return [];

     return await this.cargoRepository.save(filteredCargo)
   } catch (e){
    Logger.error(
      'Ошибка сохранения груза',
      e,
      'compliet-cargo.service.ts::addTransport',
    );
    throw new BadRequestException('Ошибка сохранения груза');
   }
  }

  /**
   * Метод сохранения для ТС
   * @param transport - добавляемые ТС
   */
 async addTransport(transport: Array<Transport>): Promise<Transport[]> {
    const getKey = (ts: Transport) =>
      `${ts.transportNumber}_${ts.documentNumber}_${ts.shipmentDate.getTime()}`; // переменная для создания ключа
    try {
      // Проверяем на дубли перед сохранением (номер ТС, номер накладной, дата отгрузки)
      const douple = await this.transportRepository.find({  // выбор нужных значений класса из бд
        where: transport.map((item) => {
          return {
            transportNumber: item.transportNumber,
            documentNumber: item.documentNumber,
            shipmentDate: item.shipmentDate,
          };
        }),
      });

      const doupleFilter = new Set<string>(douple.map((item) => getKey(item))); // передача значений из бд созданному ключу в виде текста
      const filteredTransport = transport.filter(   //возвращает массив типа transport, если выполняется условие, что getKey не имеет этой записи
        (item) => !doupleFilter.has(getKey(item)),
      );

      if (!filteredTransport.length) return [];//если filteredTransport не возвращает пустой массив, то сохранить записи в бд

      // сохранение отфильтрованных ТС
      const savedTrapsort = await this.transportRepository.save(
        filteredTransport,
      );
      return transport;
    } catch (e) {
      Logger.error(
        'Ошибка сохранения ТС',
        e,
        'compliet-cargo.service.ts::addTransport',
      );
      throw new BadRequestException('Ошибка сохранения ТС');
    }
  }

  /*async createTS(): Promise<void> {
    const tss = new Transport();

    const tsc = this.transportRepository.create(tss);  //это фуфу, но вдруг пригодится
    console.log(tsc);
    await this.transportRepository.save(tsc);
  }*/
}
