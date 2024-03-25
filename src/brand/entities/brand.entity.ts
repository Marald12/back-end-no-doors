import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class BrandEntity {
	@Field(() => Int)
	id: number

	@Field(() => String)
	title: string

	@Field(() => String)
	imagePath: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
