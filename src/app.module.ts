import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { QuestionarioModule } from './questionario/questionario.module';
import { PerguntaModule } from './pergunta/pergunta.module';
import { RespostaModule } from './resposta/resposta.module';

enum databaseType {
  postgres = 'postgres',
  mysql = 'mysql'
}

function getType ():keyof typeof databaseType {
  if (databaseType[process.env.TYPE]) return databaseType[process.env.TYPE]
  else throw new Error('INVALID DATABSE TYPE - if you need to support a different database, please add it to the enum function "databaseType"')
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // type: getType(),
      // host: process.env.HOST,
      // port: parseInt(process.env.PORT),
      // username: process.env.USERNAME,
      // password: process.env.PASSWORD,
      // database: process.env.DATABASE,

      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '478230',
      database: 'teste_enquetes',

      synchronize: true,
      autoLoadEntities: true,
    }),
    UsuarioModule,
    QuestionarioModule,
    PerguntaModule,
    RespostaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
