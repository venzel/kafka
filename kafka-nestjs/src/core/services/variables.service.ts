import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VariablesService {
    constructor(private readonly configService: ConfigService) {
        this.execute();
    }

    private execute() {
        const map = {
            API_PORT: this.configService.get<number>('API_PORT'),
        };

        const keys = [];

        for (const [key, value] of Object.entries(map)) {
            if (!value) keys.push(key);
        }

        if (keys.length) {
            const vars = keys.join(', ');

            throw new Error(`Environment variables are missing: ${vars}!`);
        }
    }
}
