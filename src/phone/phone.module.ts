import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneResolver } from './phone.resolver';

@Module({
  providers: [PhoneResolver, PhoneService],
})
export class PhoneModule {}
