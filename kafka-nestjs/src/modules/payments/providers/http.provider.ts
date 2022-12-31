import { HttpPicpayConfigService } from './../../../core/integrations/http.picpay.config.service';
import { HttpModule } from '@nestjs/axios';
import { HttpPaypalConfigService } from '../../../core/integrations/http.paypal.config.service';

export const httpProvider = HttpModule.registerAsync({
    useClass: HttpPaypalConfigService,
});

export const httpPicpayProvider = HttpModule.registerAsync({
    useClass: HttpPicpayConfigService,
});
