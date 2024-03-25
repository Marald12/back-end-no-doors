import { Module } from '@nestjs/common';
import { BasketItemService } from './basket-item.service';
import { BasketItemResolver } from './basket-item.resolver';

@Module({
  providers: [BasketItemResolver, BasketItemService],
})
export class BasketItemModule {}
