import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespostaService } from './resposta.service';
import { RespostaController } from './resposta.controller';
import { Resposta } from './resposta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resposta])],
  providers: [RespostaService],
  controllers: [RespostaController],
  exports: [RespostaService],
})
export class RespostaModule {}
