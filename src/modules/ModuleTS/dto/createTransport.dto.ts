import { Transport } from '../entities/transport.entity';

export class CreateTransportDto {
  transportNumber: string;

  documentNumber: string;

  date: Date;

  weightFirst: string;

  arrivalDate: Date;

  shipmentDate: Date;
}

export function convertTS(dto: Array<CreateTransportDto>): Array<Transport> {
  return dto.map((item) => {
    const tmp = new Transport();
    Object.assign(tmp, item);
    tmp.arrivalDate = new Date(item.arrivalDate);
    tmp.date = new Date(item.date);
    tmp.shipmentDate = new Date(item.shipmentDate);
    tmp.weightFirst = Number(item.weightFirst);
    return tmp;
  });
}
