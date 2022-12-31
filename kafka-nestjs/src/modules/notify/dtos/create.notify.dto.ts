import { IsNotEmpty } from 'class-validator';

export class CreateNotifyDto {
    @IsNotEmpty({ message: 'Informe uma mensagem!' })
    message: string;
}
