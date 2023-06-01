import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Questionario } from './questionario.entity';

@Injectable()
export class QuestionarioService {
  constructor(
    @InjectRepository(Questionario)
    private questionarioRepository: Repository<Questionario>,
  ) { }

  findAll(): Promise<Questionario[]> {
    return this.questionarioRepository.find();
  }

  findOne(id: number): Promise<Questionario | null> {
    return this.questionarioRepository.findOneBy({ id });
  }

  createOne(questionario: Questionario): Promise<Questionario> {
    return this.questionarioRepository.save(questionario);
  }

  async remove(id: number): Promise<void> {
    await this.questionarioRepository.delete(id);
  }
}
