import { Test, TestingModule } from '@nestjs/testing';
import { QuestionarioController } from './questionario.controller';

describe('QuestionarioController', () => {
  let controller: QuestionarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionarioController],
    }).compile();

    controller = module.get<QuestionarioController>(QuestionarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
