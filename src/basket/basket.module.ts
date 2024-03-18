import { Module } from '@nestjs/common'
import { BasketService } from './basket.service'
import { BasketResolver } from './basket.resolver'

@Module({
	providers: [BasketResolver, BasketService],
	exports: [BasketService]
})
export class BasketModule {}
