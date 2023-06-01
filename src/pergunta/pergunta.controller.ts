import { Body, Controller, Get, Post } from '@nestjs/common';
import { PerguntaService } from './pergunta.service';
import { Pergunta } from './pergunta.entity';

@Controller()
export class PerguntaController {
  constructor(private perguntaService: PerguntaService) {}

  @Get('perguntas')
  findAll(): Promise<Pergunta[]> {
    return this.perguntaService.findAll();
  }

  @Post('pergunta')
  createOne(@Body() pergunta: Pergunta): Promise<Pergunta> {
    return this.perguntaService.createOne(pergunta);
  }
}
