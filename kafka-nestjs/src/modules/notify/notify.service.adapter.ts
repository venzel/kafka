import { Injectable } from '@nestjs/common';
import { CreateNotifyService } from './services/create.notify.service';

@Injectable()
export class NotifyServiceAdapter {
    constructor(private readonly createNotifyService: CreateNotifyService) {}

    findAll() {
        return this.createNotifyService.execute();
    }
}
