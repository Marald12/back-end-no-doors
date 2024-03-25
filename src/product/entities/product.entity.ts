import { Field, Int, ObjectType } from '@nestjs/graphql'
import { CategoryEntity } from '../../category/entities/category.entity'
import { PhoneEntity } from '../../phone/entities/phone.entity'

@ObjectType()
export class ProductEntity {
	@Field(() => Int)
	id: number

	@Field(() => String)
	title: string

	@Field(() => String)
	type: string

	@Field(() => String)
	imagePath: string

	@Field(() => Int)
	views: number

	@Field(() => Int)
	price: number

	@Field(() => CategoryEntity)
	category: CategoryEntity

	@Field(() => PhoneEntity)
	phone: PhoneEntity

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
