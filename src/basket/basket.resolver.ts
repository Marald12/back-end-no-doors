import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { BasketService } from './basket.service'
import { BasketEntity } from './entities/basket.entity'
import { CreateBasketInput } from './dto/create-basket.input'
import { UpdateBasketInput } from './dto/update-basket.input'

@Resolver(() => BasketEntity)
export class BasketResolver {
	constructor(private readonly basketService: BasketService) {}

	@Mutation(() => BasketEntity)
	createBasket(
		@Args('createBasketInput') createBasketInput: CreateBasketInput
	) {
		return this.basketService.create(createBasketInput)
	}

	@Query(() => [BasketEntity], { name: 'baskets' })
	findAll() {
		return this.basketService.findAll()
	}

	@Query(() => BasketEntity, { name: 'basket' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.basketService.findOne(id)
	}

	@Mutation(() => BasketEntity)
	updateBasket(
		@Args('updateBasketInput') updateBasketInput: UpdateBasketInput
	) {
		return this.basketService.update(updateBasketInput.id, updateBasketInput)
	}

	@Mutation(() => BasketEntity)
	removeBasket(@Args('id', { type: () => Int }) id: number) {
		return this.basketService.remove(id)
	}
}
