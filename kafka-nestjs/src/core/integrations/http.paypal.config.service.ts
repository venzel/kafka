import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpPaypalConfigService implements HttpModuleOptionsFactory {
    createHttpOptions(): HttpModuleOptions {
        return {
            headers: {
                Authorization: 'BEARER TOKEN PAYPAL',
            },
            timeout: 5000,
            maxRedirects: 5,
        };
    }
}
