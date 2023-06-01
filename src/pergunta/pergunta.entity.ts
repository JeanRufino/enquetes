import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pergunta {
  @PrimaryGeneratedColumn()
  private cod: number;
  
  @Column()
  private cod_perg: number;

  @Column()
  private descricao: string;
  
}