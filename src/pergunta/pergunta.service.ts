import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pergunta } from './pergunta.entity';

@Injectable()
export class PerguntaService {
  constructor(
    @InjectRepository(Pergunta)
    private perguntaRepository: Repository<Pergunta>,
  ) { }

  findAll(): Promise<Pergunta[]> {
    return this.perguntaRepository.find();
  }

  findOne(id: number): Promise<Pergunta | null> {
    return this.perguntaRepository.findOneBy({ id });
  }

  createOne(pergunta: Pergunta): Promise<Pergunta> {
    return this.perguntaRepository.save(pergunta);
  }

  async remove(id: number): Promise<void> {
    await this.perguntaRepository.delete(id);
  }
}
