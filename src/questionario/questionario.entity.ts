import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Questionario {
  @PrimaryGeneratedColumn()
  private cod: number;
  
  @Column()
  private data: Date;

  @Column()
  private nome: string;
  
  @Column()
  private descricao: string;
}