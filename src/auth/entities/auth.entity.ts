import { Field, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../user/entities/user.entity'

@ObjectType()
export class Auth {
	@Field(() => UserEntity)
	user: UserEntity

	@Field(() => String)
	token: string
}
