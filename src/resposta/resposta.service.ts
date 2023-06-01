import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resposta } from './resposta.entity';

@Injectable()
export class RespostaService {
  constructor(
    @InjectRepository(Resposta)
    private respostaRepository: Repository<Resposta>,
  ) { }

  findAll(): Promise<Resposta[]> {
    return this.respostaRepository.find();
  }

  findOne(id: number): Promise<Resposta | null> {
    return this.respostaRepository.findOneBy({ id });
  }

  createOne(pergunta: Resposta): Promise<Resposta> {
    return this.respostaRepository.save(pergunta);
  }

  async remove(id: number): Promise<void> {
    await this.respostaRepository.delete(id);
  }
}
