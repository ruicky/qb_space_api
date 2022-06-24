import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TorrentsModule } from './torrents/torrents.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TorrentsModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
