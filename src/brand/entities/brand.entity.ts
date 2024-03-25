import { Field, Int, ObjectType } from '@nestjs/graphql'
import { PhoneEntity } from '../../phone/entities/phone.entity'

@ObjectType()
export class BrandEntity {
	@Field(() => Int)
	id: number

	@Field(() => String)
	title: string

	@Field(() => String)
	imagePath: string

	@Field(() => [PhoneEntity])
	phones: PhoneEntity[]

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
