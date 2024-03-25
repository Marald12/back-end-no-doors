import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBasketItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
