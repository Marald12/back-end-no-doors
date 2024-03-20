import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { UserEntity } from './entities/user.entity'
import { UpdateUserInput } from './dto/update-user.input'
import { CurrentUser } from './decorators/user.decorator'
import { User } from '@prisma/client'

@Resolver(() => UserEntity)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => [UserEntity], { name: 'users' })
	findAll() {
		return this.userService.findAll()
	}

	@Query(() => UserEntity, { name: 'user' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.userService.findOne(id)
	}

	@Mutation(() => UserEntity)
	updateUser(
		@Args('updateUserInput') updateUserInput: UpdateUserInput,
		@CurrentUser() user: User
	) {
		return this.userService.update(user.id, updateUserInput)
	}

	@Mutation(() => UserEntity)
	removeUser(@Args('id', { type: () => Int }) id: number) {
		return this.userService.remove(id)
	}
}
