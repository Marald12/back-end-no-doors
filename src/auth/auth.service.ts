import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { RegisterInput } from './dto/register.input'
import { UserService } from '../user/user.service'
import { User } from '@prisma/client'
import { LoginInput } from './dto/login.input'
import { compare } from 'bcryptjs'

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly userService: UserService
	) {}

	async login(loginInput: LoginInput) {
		const user = await this.userService.findOneByEmail(loginInput.email)

		const isValidPassword = await compare(loginInput.password, user.password)
		if (!isValidPassword)
			throw new BadRequestException('E-mail или пароль неверный')

		return await this.returnUserFields(user)
	}

	async register(registerInput: RegisterInput) {
		const user = await this.userService.create(registerInput)

		return await this.returnUserFields(user)
	}

	private async returnUserFields(user: User) {
		return {
			user,
			token: await this.generateJwtToken(user.id)
		}
	}

	private async generateJwtToken(id: number) {
		return await this.jwtService.signAsync({ id })
	}
}
