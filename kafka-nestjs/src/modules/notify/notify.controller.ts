import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotifyDto } from './dtos/create.notify.dto';
import { ResponseNotifyDto } from './dtos/response.notify.dto';
import { NotifyServiceAdapter } from './notify.service.adapter';

@Controller('notifies')
export class NotifyController {
    constructor(private readonly notifyService: NotifyServiceAdapter) {}

    @Post()
    async create(@Body() createNotifyDto: CreateNotifyDto): Promise<ResponseNotifyDto> {
        return await this.notifyService.create(createNotifyDto);
    }

    @Get()
    async findAll(): Promise<ResponseNotifyDto[]> {
        return await this.notifyService.findAll();
    }
}
