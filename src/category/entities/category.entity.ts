import { Field, Int, ObjectType } from '@nestjs/graphql'
import { ProductEntity } from '../../product/entities/product.entity'

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

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
