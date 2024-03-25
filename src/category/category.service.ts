import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class CategoryService {
	async create(createCategoryInput: CreateCategoryInput, phoneId: number) {
		const prismaClient = new PrismaClient()

		return prismaClient.category.create({
			data: {
				...createCategoryInput,
				phone: {
					connect: {
						id: phoneId
					}
				}
			},
			include: {
				products: true
			}
		})
	}

	async findAll() {
		const prismaClient = new PrismaClient()

		return prismaClient.category.findMany({
			include: {
				products: true
			}
		})
	}

	async findOne(id: number) {
		const prismaClient = new PrismaClient()

		const category = await prismaClient.category.findUnique({
			where: { id },
			include: {
				products: true
			}
		})
		if (!category) throw new NotFoundException('Категория не найдена')

		return category
	}

	async update(id: number, updateCategoryInput: UpdateCategoryInput) {
		const prismaClient = new PrismaClient()

		return prismaClient.category.update({
			where: { id },
			data: {
				...updateCategoryInput
			}
		})
	}

	async remove(id: number) {
		const prismaClient = new PrismaClient()

		await prismaClient.category.delete({ where: { id } })

		return 'Категория успешно удалена'
	}
}
