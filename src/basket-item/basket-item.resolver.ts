import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BasketItemService } from './basket-item.service';
import { BasketItem } from './entities/basket-item.entity';
import { CreateBasketItemInput } from './dto/create-basket-item.input';
import { UpdateBasketItemInput } from './dto/update-basket-item.input';

@Resolver(() => BasketItem)
export class BasketItemResolver {
  constructor(private readonly basketItemService: BasketItemService) {}

  @Mutation(() => BasketItem)
  createBasketItem(@Args('createBasketItemInput') createBasketItemInput: CreateBasketItemInput) {
    return this.basketItemService.create(createBasketItemInput);
  }

  @Query(() => [BasketItem], { name: 'basketItem' })
  findAll() {
    return this.basketItemService.findAll();
  }

  @Query(() => BasketItem, { name: 'basketItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basketItemService.findOne(id);
  }

  @Mutation(() => BasketItem)
  updateBasketItem(@Args('updateBasketItemInput') updateBasketItemInput: UpdateBasketItemInput) {
    return this.basketItemService.update(updateBasketItemInput.id, updateBasketItemInput);
  }

  @Mutation(() => BasketItem)
  removeBasketItem(@Args('id', { type: () => Int }) id: number) {
    return this.basketItemService.remove(id);
  }
}
