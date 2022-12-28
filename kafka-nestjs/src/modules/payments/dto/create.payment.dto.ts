import { IsNotEmpty, Matches, MaxLength } from 'class-validator';

export class CreatePaymentDto {
    @Matches(/[a-zA-Z0-9_-]{2,20}/, { message: 'Insira uma descrição válida!' })
    @MaxLength(20, { message: 'A descrição de conter no máximo 20 caracteres!' })
    @IsNotEmpty({ message: 'Informe uma descrição!' })
    description: string;

    @IsNotEmpty({ message: 'Informe um valor!' })
    amount: number;
}
