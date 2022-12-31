import { Injectable } from '@nestjs/common';
import { NotifyMessageEnum } from '../enums/notify.message.enum';
import { ResponseNotifyDto } from '../notify.dtos.barrel';
import { NotifyService } from './base.notify.service';

@Injectable()
export class FindNotifyService extends NotifyService {
    constructor() {
        super(FindNotifyService.name);
    }

    async execute(): Promise<ResponseNotifyDto[]> {
        const notifies = await this.notifyRepository.findAll();

        this.logger.log(NotifyMessageEnum.LISTED);

        return ResponseNotifyDto.parseAll(notifies);
    }
}
