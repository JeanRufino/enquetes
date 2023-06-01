import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionarioService } from './questionario.service';
import { QuestionarioController } from './questionario.controller';
import { Questionario } from './questionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Questionario])],
  providers: [QuestionarioService],
  controllers: [QuestionarioController],
  exports: [QuestionarioService],
})
export class QuestionarioModule {}
