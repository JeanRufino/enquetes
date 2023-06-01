import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerguntaService } from './pergunta.service';
import { PerguntaController } from './pergunta.controller';
import { Pergunta } from './pergunta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pergunta])],
  providers: [PerguntaService],
  controllers: [PerguntaController],
  exports: [PerguntaService],
})
export class PerguntaModule {}
