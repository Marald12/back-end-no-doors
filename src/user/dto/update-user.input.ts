import { RegisterInput } from './register.input'
import { Field, InputType, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(RegisterInput) {
	@Field(() => Int)
	id: number
}
