import { Test, TestingModule } from '@nestjs/testing';
import { PerguntaController } from './pergunta.controller';

describe('PerguntaController', () => {
  let controller: PerguntaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerguntaController],
    }).compile();

    controller = module.get<PerguntaController>(PerguntaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
