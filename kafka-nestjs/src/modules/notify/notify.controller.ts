import { Controller, Get } from '@nestjs/common';
import { NotifyServiceAdapter } from './notify.service.adapter';

@Controller('notifies')
export class NotifyController {
    constructor(private readonly notifyService: NotifyServiceAdapter) {}

    @Get()
    findAll() {
        return this.notifyService.findAll();
    }
}
