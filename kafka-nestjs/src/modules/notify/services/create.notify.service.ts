import { Injectable } from '@nestjs/common';
import { NotifyRepository } from '../repositories/notify.repository';

@Injectable()
export class CreateNotifyService {
    constructor(private readonly notifyRepository: NotifyRepository) {}

    execute() {
        return this.notifyRepository.findAll();
    }
}
