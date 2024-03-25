import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreatePhoneInput {
	@Field(() => String)
	title: string

	@Field(() => String)
	imagePath: string
}
