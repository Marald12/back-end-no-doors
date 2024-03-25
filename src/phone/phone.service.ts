import { Injectable, NotFoundException } from '@nestjs/common'
import { CreatePhoneInput } from './dto/create-phone.input'
import { UpdatePhoneInput } from './dto/update-phone.input'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PhoneService {
	async create(createPhoneInput: CreatePhoneInput, brandId: number) {
		const prismaClient = new PrismaClient()

		return prismaClient.phone.create({
			data: {
				...createPhoneInput,
				brand: {
					connect: {
						id: brandId
					}
				}
			}
		})
	}

	async findAll() {
		const prismaClient = new PrismaClient()

		return prismaClient.phone.findMany({
			include: {
				brand: true,
				products: true,
				categories: true
			}
		})
	}

	async findOne(id: number) {
		const prismaClient = new PrismaClient()

		const phone = await prismaClient.phone.findUnique({
			where: { id },
			include: {
				brand: true,
				products: true,
				categories: true
			}
		})
		if (!phone) throw new NotFoundException('Телефон не найден')

		return phone
	}

	async update(id: number, updatePhoneInput: UpdatePhoneInput) {
		return `This action updates a #${id} phone`
	}

	async remove(id: number) {
		return `This action removes a #${id} phone`
	}
}
