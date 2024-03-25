import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class ProductService {
	async create(
		createProductInput: CreateProductInput,
		phoneId: number,
		categoryId: number
	) {
		const prismaClient = new PrismaClient()

		return prismaClient.product.create({
			data: {
				...createProductInput,
				phone: {
					connect: {
						id: phoneId
					}
				},
				category: {
					connect: {
						id: categoryId
					}
				},
				views: 0
			}
		})
	}

	async findAll() {
		const prismaClient = new PrismaClient()

		return prismaClient.product.findMany({
			include: {
				phone: true,
				category: true
			}
		})
	}

	async findOne(id: number) {
		const prismaClient = new PrismaClient()

		const product = await prismaClient.product.findUnique({
			where: { id }
		})
		if (!product) throw new NotFoundException('Продукт не найден')

		return prismaClient.product.update({
			where: { id },
			data: {
				views: product.views + 1
			},
			include: {
				phone: true,
				category: true
			}
		})
	}

	async update(id: number, updateProductInput: UpdateProductInput) {
		const prismaClient = new PrismaClient()

		const product = await prismaClient.product.findUnique({
			where: { id },
			include: {
				phone: true,
				category: true
			}
		})
		if (!product) throw new NotFoundException('Продукт не найден')

		return prismaClient.product.update({
			where: { id },
			data: {
				...updateProductInput
			}
		})
	}

	async remove(id: number) {
		return `This action removes a #${id} product`
	}
}
