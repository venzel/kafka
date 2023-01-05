import { Injectable } from '@nestjs/common';
import { ResponseNotifyDto } from '../dtos/response.notify.dto';
import { NotifyMessageEnum } from '../enums/notify.message.enum';
import { CreateNotifyDto } from '../dtos/create.notify.dto';
import { BaseNotifyService } from './base.notify.service';
import { NotifyMapper } from '../mappers/notify.mapper';

@Injectable()
export class CreateNotifyService extends BaseNotifyService {
    async execute(dto: CreateNotifyDto): Promise<ResponseNotifyDto> {
        const notify = await this.notifyRepository.create(dto);

        this.logger.log(NotifyMessageEnum.CREATED);

        return NotifyMapper.toDto(notify);
    }
}
