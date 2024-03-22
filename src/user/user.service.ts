import { BadRequestException, Injectable } from '@nestjs/common'
import { RegisterInput } from '../auth/dto/register.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaClient } from '@prisma/client'
import { genSalt, hash } from 'bcryptjs'
import { BasketService } from '../basket/basket.service'

@Injectable()
export class UserService {
	constructor(private readonly basketService: BasketService) {}

	async create(registerInput: RegisterInput) {
		const prismaClient = new PrismaClient()

		const oldUser = await prismaClient.user.findUnique({
			where: { email: registerInput.email }
		})
		if (oldUser)
			throw new BadRequestException(
				'Пользователь с таким E-mail уже существует'
			)

		const salt = await genSalt(10)
		const hashPassword = await hash(registerInput.password, salt)

		const user = await prismaClient.user.create({
			data: {
				...registerInput,
				password: hashPassword
			}
		})

		await this.basketService.create(user.id)

		return user
	}

	async findAll() {
		const prismaClient = new PrismaClient()

		return prismaClient.user.findMany({
			include: {
				favoritesProducts: true,
				basket: true
			}
		})
	}

	async findOne(id: number) {
		const prismaClient = new PrismaClient()

		const user = await prismaClient.user.findUnique({
			where: { id },
			include: {
				basket: true,
				favoritesProducts: true
			}
		})
		if (!user) throw new BadRequestException('Пользователь не найден')

		return user
	}

	async findOneByEmail(email: string) {
		const prismaClient = new PrismaClient()

		const user = await prismaClient.user.findUnique({
			where: { email },
			include: {
				basket: true
			}
		})
		if (!user) throw new BadRequestException('Пользователь не найден')

		return user
	}

	async update(id: number, updateUserInput: UpdateUserInput) {
		const prismaClient = new PrismaClient()

		return prismaClient.user.update({
			where: {
				id
			},
			data: {
				...updateUserInput
			}
		})
	}

	async remove(id: number) {
		const prismaClient = new PrismaClient()

		const user = await this.findOne(id)

		if (user.basket) await this.basketService.remove(id)

		await prismaClient.user.delete({
			where: { id }
		})

		return 'Пользователь успешно удалён'
	}
}
