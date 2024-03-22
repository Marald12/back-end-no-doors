import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { BasketService } from './basket.service'
import { BasketEntity } from './entities/basket.entity'
import { CurrentUser } from '../user/decorators/user.decorator'
import { User } from '@prisma/client'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/decorators/auth.decorator'

@Resolver(() => BasketEntity)
export class BasketResolver {
	constructor(private readonly basketService: BasketService) {}

	@Mutation(() => BasketEntity, { name: 'createBasket' })
	@UseGuards(GqlAuthGuard)
	createBasket(@CurrentUser() user: User) {
		return this.basketService.create(user.id)
	}

	@Query(() => [BasketEntity], { name: 'baskets' })
	findAll() {
		return this.basketService.findAll()
	}

	@Query(() => BasketEntity, { name: 'basket' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.basketService.findOne(id)
	}
}
