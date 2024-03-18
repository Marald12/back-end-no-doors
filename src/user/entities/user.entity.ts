import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Basket } from '../../basket/entities/basket.entity'

@ObjectType()
export class User {
	@Field(() => Int)
	id: number

	@Field(() => String)
	email: string

	@Field(() => String)
	password: string

	@Field(() => Boolean)
	isEntityFace: boolean

	@Field(() => String)
	fullName: string

	@Field(() => String)
	phone: string

	@Field(() => String, { nullable: true })
	companyName?: string

	@Field(() => Int, { nullable: true })
	iin?: number

	@Field(() => Int, { nullable: true })
	kpp?: number

	@Field(() => Int, { nullable: true })
	ogrp?: number

	@Field(() => String, { nullable: true })
	legalAddress?: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date

	@Field()
	favoritesProducts: any

	@Field(() => Basket)
	basket: Basket
}
