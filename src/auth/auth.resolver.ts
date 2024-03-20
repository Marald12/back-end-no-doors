import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { Auth } from './entities/auth.entity'
import { RegisterInput } from './dto/register.input'
import { LoginInput } from './dto/login.input'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => Auth)
	register(@Args('registerInput') registerInput: RegisterInput) {
		return this.authService.register(registerInput)
	}

	@Mutation(() => Auth)
	login(@Args('loginInput') loginInput: LoginInput) {
		return this.authService.login(loginInput)
	}
}
