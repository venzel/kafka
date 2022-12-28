import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const httpIntegration = HttpModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get<string>('API_BASE_URL'),
        headers: {
            Authorization: 'BEARER TOKEN',
        },
        timeout: 7000,
        maxRedirects: 5,
    }),
    inject: [ConfigService],
});
