import { Field, Int, ObjectType } from '@nestjs/graphql'

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

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
