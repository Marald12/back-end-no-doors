import { BadRequestException, Injectable } from '@nestjs/common'
import { RegisterInput } from './dto/register.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaClient } from '@prisma/client'
import { genSalt, hash } from 'bcryptjs'

@Injectable()
export class UserService {
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

		return prismaClient.user.create({
			data: {
				...registerInput,
				password: hashPassword
			}
		})
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

		const user = await prismaClient.user.findUnique({ where: { id } })
		if (!user) throw new BadRequestException('E-mail или пароль неверный')

		return user
	}

	async update(id: number, updateUserInput: UpdateUserInput) {
		return `This action updates a #${id} user`
	}

	async remove(id: number) {
		return `This action removes a #${id} user`
	}
}
