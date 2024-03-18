import { Field, Int, ObjectType } from '@nestjs/graphql'
import { User } from '../../user/entities/user.entity'

@ObjectType()
export class Basket {
	@Field(() => Int)
	id: number

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date

	@Field(() => User)
	user: User

	@Field()
	items: any
}
