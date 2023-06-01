import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  private cod: number;
  
  @Column()
  private nome: string;

  @Column()
  private senha: string;
  
  @Column()
  private cpf: string;
}
