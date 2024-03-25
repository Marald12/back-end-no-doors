import { Field, Int, ObjectType } from '@nestjs/graphql'
import { ProductEntity } from '../../product/entities/product.entity'
import { PhoneEntity } from '../../phone/entities/phone.entity'

@ObjectType()
export class CategoryEntity {
	@Field(() => Int)
	id: number

	@Field(() => String)
	title: string

	@Field(() => String)
	imagePath: string

	@Field(() => [ProductEntity])
	products: ProductEntity[]

	@Field(() => PhoneEntity)
	phone: PhoneEntity

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
