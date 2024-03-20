import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { UserEntity } from './entities/user.entity'
import { UpdateUserInput } from './dto/update-user.input'
import { CurrentUser } from './decorators/user.decorator'
import { User } from '@prisma/client'
import { GqlAuthGuard } from '../auth/decorators/auth.decorator'
import { UseGuards } from '@nestjs/common'

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
	@UseGuards(GqlAuthGuard)
	updateUser(
		@Args('updateUserInput') updateUserInput: UpdateUserInput,
		@CurrentUser() user: User
	) {
		return this.userService.update(user.id, updateUserInput)
	}

	@Mutation(() => String)
	@UseGuards(GqlAuthGuard)
	removeUser(@CurrentUser() user: User) {
		return this.userService.remove(user.id)
	}
}
