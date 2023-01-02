import { Injectable } from '@nestjs/common';
import { NotifyMessageEnum } from '../enums/notify.message.enum';
import { NotifyMapper } from '../mappers/notify.mapper';
import { ResponseNotifyDto } from '../notify.dtos.barrel';
import { NotifyService } from './base.notify.service';

@Injectable()
export class FindNotifyService extends NotifyService {
    async execute(): Promise<ResponseNotifyDto[]> {
        const notifies = await this.notifyRepository.find();

        this.logger.log(NotifyMessageEnum.LISTED);

        return NotifyMapper.toListDto(notifies);
    }
}
