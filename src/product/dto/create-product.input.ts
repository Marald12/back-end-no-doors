import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateProductInput {
	@Field(() => String)
	title: string

	@Field(() => String)
	type: string

	@Field(() => Int)
	price: number

	@Field(() => String)
	imagePath: string
}
