import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';

@Module({
  controllers: [],
  providers: [],
  imports: [PaymentsModule],
})
export class AppModule {}
