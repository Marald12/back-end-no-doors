import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class BasketService {
	async create(id: number) {
		const prismaClient = new PrismaClient()

		return prismaClient.basket.create({
			data: {
				user: {
					connect: {
						id
					}
				}
			},
			include: {
				user: true,
				items: true
			}
		})
	}

	async findAll() {
		const prismaClient = new PrismaClient()

		return prismaClient.basket.findMany({
			include: {
				user: true,
				items: true
			}
		})
	}

	async findOne(id: number) {
		const prismaClient = new PrismaClient()

		const basket = await prismaClient.basket.findUnique({
			where: { id },
			include: {
				user: true,
				items: true
			}
		})
		if (!basket) throw new NotFoundException('Корзина не найдена')

		return basket
	}

	async remove(id: number) {
		const prismaClient = new PrismaClient()

		const user = await prismaClient.user.findUnique({
			where: { id },
			include: { basket: true }
		})

		await prismaClient.basket.delete({
			where: {
				id: user.basket.id
			}
		})

		return 'Корзина успешно удалена'
	}
}
