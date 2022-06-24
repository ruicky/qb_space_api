import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { TorrentsService } from './torrents.service';
import { TorrrentInterface } from './interface/torrent.interface';

@Controller('torrents')
export class TorrentsController {
  constructor(private readonly torrentsService: TorrentsService) {}
  @Get()
  async getTorrents(): Promise<TorrrentInterface[]> {
    return this.torrentsService.findAll();
  }
}
