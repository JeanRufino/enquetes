import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionarioService } from './questionario.service';
import { Questionario } from './questionario.entity';

@Controller()
export class QuestionarioController {
  constructor(private questionarioService: QuestionarioService) {}

  @Get('questionarios')
  findAll(): Promise<Questionario[]> {
    return this.questionarioService.findAll();
  }

  @Post('questionario')
  createOne(@Body() questionario: Questionario): Promise<Questionario> {
    return this.questionarioService.createOne(questionario);
  }
}
