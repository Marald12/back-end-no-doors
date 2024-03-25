import { Field, Int, ObjectType } from '@nestjs/graphql'
import { BrandEntity } from '../../brand/entities/brand.entity'
import { ProductEntity } from '../../product/entities/product.entity'
import { CategoryEntity } from '../../category/entities/category.entity'

@ObjectType()
export class PhoneEntity {
	@Field(() => Int)
	id: number

	@Field(() => String)
	title: string

	@Field(() => String)
	imagePath: string

	@Field(() => BrandEntity)
	brand: BrandEntity

	@Field(() => [ProductEntity])
	products: ProductEntity[]

	@Field(() => [CategoryEntity])
	categories: CategoryEntity

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
