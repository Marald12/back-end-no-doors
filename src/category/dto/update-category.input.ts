import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateCategoryInput {
	@Field(() => String, { nullable: true })
	title: string

	@Field(() => String, { nullable: true })
	imagePath: string
}
