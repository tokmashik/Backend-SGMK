import { Test, TestingModule } from '@nestjs/testing';
import { ElseController } from './else.controller';

describe('Else.ControllerController', () => {
  let controller: ElseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElseController],
    }).compile();

    controller = module.get<ElseController>(ElseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
