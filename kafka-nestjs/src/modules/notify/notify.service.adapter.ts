import { Injectable } from '@nestjs/common';
import { CreateNotifyDto } from './dtos/create.notify.dto';
import { ResponseNotifyDto } from './notify.dtos.barrel';
import { CreateNotifyService, FindNotifyService } from './notify.services.barrel';

@Injectable()
export class NotifyServiceAdapter {
    constructor(
        private readonly createNotifyService: CreateNotifyService,
        private readonly findNotifyService: FindNotifyService,
    ) {}

    async create(createNotifyDto: CreateNotifyDto): Promise<ResponseNotifyDto> {
        return await this.createNotifyService.execute(createNotifyDto);
    }

    async findAll(): Promise<ResponseNotifyDto[]> {
        return await this.findNotifyService.execute();
    }
}
