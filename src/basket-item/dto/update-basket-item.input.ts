import { CreateBasketItemInput } from './create-basket-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasketItemInput extends PartialType(CreateBasketItemInput) {
  @Field(() => Int)
  id: number;
}
