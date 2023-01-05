import { Injectable } from '@nestjs/common';
import { CreateNotifyDto } from '../dtos/create.notify.dto';
import { ResponseNotifyDto } from '../dtos/response.notify.dto';
import { NotifyMessageEnum } from '../enums/notify.message.enum';
import { NotifyMapper } from '../mappers/notify.mapper';
import { NotifyServiceBase } from './notify.service.base';

@Injectable()
export class CreateNotifyService extends NotifyServiceBase {
    async execute(dto: CreateNotifyDto): Promise<ResponseNotifyDto> {
        const notify = await this.notifyRepository.create(dto);

        this.logger.log(NotifyMessageEnum.CREATED);

        return NotifyMapper.toDto(notify);
    }
}
