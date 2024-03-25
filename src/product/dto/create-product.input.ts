import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateProductInput {
	@Field(() => String)
	title: string

	@Field(() => String)
	type: string

	@Field(() => String)
	imagePath: string
}
