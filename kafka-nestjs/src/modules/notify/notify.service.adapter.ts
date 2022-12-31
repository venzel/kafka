import { CreateNotifyDto } from './dto/create.notify.dto';
import { Injectable } from '@nestjs/common';
import { CreateNotifyService } from './services/create.notify.service';
import { FindAllNotifyService } from './services/findall.notify.service';

@Injectable()
export class NotifyServiceAdapter {
    constructor(
        private readonly createNotifyService: CreateNotifyService,
        private readonly findAllNotifyService: FindAllNotifyService,
    ) {}

    create(createNotifyDto: CreateNotifyDto) {
        return this.createNotifyService.execute(createNotifyDto);
    }

    findAll() {
        return this.findAllNotifyService.execute();
    }
}
