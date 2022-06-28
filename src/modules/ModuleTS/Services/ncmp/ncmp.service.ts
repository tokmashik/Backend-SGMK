import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Problem } from '../../entities/problems.entity';

@Injectable()
export class NcmpService {
  constructor(
    @InjectRepository(Problem)
    private problemRepository: Repository<Problem>,
  ) {}
  private readonly problem: Array<Problem> = [];

  async create(problems: Array<Problem>): Promise<Problem[]> {
    const getKey = (problem: Problem) => `${problem.id}`;
    try{
      const douple = await this.problemRepository.find({
        where: problems.map((item) =>{
          return{
            id: item.id,
          }
        })
      })

      const doupleFilter = new Set<string>(douple.map((item) => getKey(item)))
      const filteredProblems = problems.filter(
        (item) => !doupleFilter.has(getKey(item))
      )

      if (!filteredProblems.length) return []

      return await this.problemRepository.save(filteredProblems)
    }catch(e){
      Logger.error(
        'Ошибка сохранения проблемы',
        e,
        'compliet-cargo.service.ts::addTransport',
      );
      throw new BadRequestException('Ошибка сохранения проблемы');
    }
  }
}
