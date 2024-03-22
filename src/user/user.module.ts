import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { BasketService } from '../basket/basket.service'

@Module({
	providers: [UserResolver, UserService, BasketService],
	exports: [UserService]
})
export class UserModule {}
