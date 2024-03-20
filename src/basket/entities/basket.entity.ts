import { Field, Int, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../user/entities/user.entity'

@ObjectType()
export class BasketEntity {
	@Field(() => Int)
	id: number

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date

	@Field(() => UserEntity)
	user: UserEntity
}
