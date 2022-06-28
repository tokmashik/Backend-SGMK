import { Body, Controller, Post } from '@nestjs/common';
import { convertProblem, CreateProblemDTO } from '../dto/createProblems.dto';
import { Problem } from '../entities/problems.entity';
import { NcmpService } from '../Services/ncmp/ncmp.service';

@Controller('NCM')
export class NCMPController {
  constructor(private ncmp: NcmpService) {}

  @Post('custom')
  async create(@Body() createNCMP: Array<CreateProblemDTO>,
  ): Promise<Array<Problem>> {
    return this.ncmp.create(convertProblem(createNCMP));
  }
}
