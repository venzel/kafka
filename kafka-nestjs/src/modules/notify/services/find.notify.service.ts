import { Injectable } from '@nestjs/common';
import { NotifyMessageEnum } from '../enums/notify.message.enum';
import { NotifyMapper } from '../mappers/notify.mapper';
import { ResponseNotifyDto } from '../dtos/notify.dtos.barrel';
import { BaseNotifyService } from './base.notify.service';

@Injectable()
export class FindNotifyService extends BaseNotifyService {
    async execute(): Promise<ResponseNotifyDto[]> {
        const notifies = await this.notifyRepository.list();

        this.logger.log(NotifyMessageEnum.LISTED);

        return NotifyMapper.toListDto(notifies);
    }
}
