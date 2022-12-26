import { IsNotEmpty } from 'class-validator';

export class CreateReportDto {
    @IsNotEmpty({ message: 'Informe uma descrição!' })
    description: string;

    @IsNotEmpty({ message: 'Informe um status!' })
    resolved: boolean;
}
