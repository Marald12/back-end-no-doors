import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateBrandInput } from './dto/create-brand.input'
import { UpdateBrandInput } from './dto/update-brand.input'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class BrandService {
	async create(createBrandInput: CreateBrandInput) {
		const prismaClient = new PrismaClient()

		return prismaClient.brand.create({
			data: {
				...createBrandInput
			}
		})
	}

	async findAll() {
		const prismaClient = new PrismaClient()

		return prismaClient.brand.findMany({
			include: {
				phones: true
			}
		})
	}

	async findOne(id: number) {
		const prismaClient = new PrismaClient()

		const brand = await prismaClient.brand.findUnique({
			where: { id },
			include: { phones: true }
		})
		if (!brand) throw new NotFoundException('Бренд не найден')

		return brand
	}

	async update(id: number, updateBrandInput: UpdateBrandInput) {
		return `This action updates a #${id} brand`
	}

	async remove(id: number) {
		return `This action removes a #${id} brand`
	}
}
