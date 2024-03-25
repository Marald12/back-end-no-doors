import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateProductInput {
	@Field(() => String, { nullable: true })
	title: string

	@Field(() => String, { nullable: true })
	type: string

	@Field(() => Int, { nullable: true })
	price: number

	@Field(() => String, { nullable: true })
	imagePath: string
}
