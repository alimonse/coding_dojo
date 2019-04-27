import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketModule } from 'web-sockets/operadora-escucha-gateway/ web-sockets.module';
import { UsuarioEntity } from 'usuario/usuario.entity';
import { UsuarioModule } from '../src/usuario/usuario.module';

@Module({
  imports: [
    WebSocketModule,
    TypeOrmModule.forRoot({
      useNewUrlParser: true,
      type: 'mongodb',
      host: 'localhost',
      port: 32768,
      database: 'dojo-chat',
      entities: [
      UsuarioEntity
      ],
      synchronize: true,
      dropSchema: true,
    }),
   




  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
