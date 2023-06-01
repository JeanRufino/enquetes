import { Body, Controller, Get, Post } from '@nestjs/common';
import { RespostaService } from './resposta.service';
import { Resposta } from './resposta.entity';

@Controller()
export class RespostaController {
  constructor(private respostaService: RespostaService) {}

  @Get('perguntas')
  findAll(): Promise<Resposta[]> {
    return this.respostaService.findAll();
  }

  @Post('pergunta')
  createOne(@Body() resposta: Resposta): Promise<Resposta> {
    return this.respostaService.createOne(resposta);
  }
}
