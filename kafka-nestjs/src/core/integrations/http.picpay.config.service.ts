import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpPicpayConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                Authorization: 'BEARER TOKEN PICPAY',
            },
            timeout: 5000,
            maxRedirects: 5,
        };
    }
}
