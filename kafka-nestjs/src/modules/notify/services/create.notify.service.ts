import { Injectable } from '@nestjs/common';
import { ResponseNotifyDto } from '../dtos/response.notify.dto';
import { NotifyMessageEnum } from '../enums/notify.message.enum';
import { CreateNotifyDto } from '../dtos/create.notify.dto';
import { NotifyService } from './base.notify.service';

@Injectable()
export class CreateNotifyService extends NotifyService {
    constructor() {
        super(CreateNotifyService.name);
    }

    async execute(createNotifyDto: CreateNotifyDto): Promise<ResponseNotifyDto> {
        const notifyCreated = await this.notifyRepository.create(createNotifyDto);

        this.logger.log(NotifyMessageEnum.CREATED);

        return ResponseNotifyDto.parse(notifyCreated);
    }
}
