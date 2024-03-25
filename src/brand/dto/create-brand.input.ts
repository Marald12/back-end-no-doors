import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateBrandInput {
	@Field(() => String)
	title: string

	@Field(() => String)
	imagePath: string
}
