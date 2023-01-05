import { Injectable } from '@nestjs/common';
import { ResponseNotifyDto } from '../dtos/notify.dtos.barrel';
import { NotifyMessageEnum } from '../enums/notify.message.enum';
import { NotifyMapper } from '../mappers/notify.mapper';
import { NotifyServiceBase } from './notify.service.base';

@Injectable()
export class FindNotifyService extends NotifyServiceBase {
    async execute(): Promise<ResponseNotifyDto[]> {
        const notifies = await this.notifyRepository.list();

        this.logger.log(NotifyMessageEnum.LISTED);

        return NotifyMapper.toListDto(notifies);
    }
}
