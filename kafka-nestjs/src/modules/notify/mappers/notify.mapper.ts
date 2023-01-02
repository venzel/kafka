import { NotifyEntityInterface } from '../entities/notify.entity.interface';
import { ResponseNotifyDto } from '../notify.dtos.barrel';

export class NotifyMapper {
    static toDto({ id, message }: NotifyEntityInterface): ResponseNotifyDto {
        return ResponseNotifyDto.factory(id, message);
    }

    static toListDto(notifies: NotifyEntityInterface[]): ResponseNotifyDto[] {
        return notifies.map(({ id, message }) => ResponseNotifyDto.factory(id, message));
    }
}
