import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import * as Api from 'qbittorrent-api-v2';
import { TorrrentInterface } from './interface/torrent.interface';

@Injectable()
export class TorrentsService {
  constructor(private configService: ConfigService) {}
  private readonly logger = new Logger(TorrentsService.name);

  async findAll(): Promise<TorrrentInterface[]> {
    const host = this.configService.get<string>('QB_URL');
    const username = this.configService.get<string>('QB_USERNAME');
    const password = this.configService.get<string>('QB_PASSWORD');
    this.logger.log(host);
    this.logger.log(username);
    this.logger.log(password);

    const qbClient = await Api.connect(host, username, password);
    const torrents = await qbClient.torrents();
    return torrents;
  }
}
