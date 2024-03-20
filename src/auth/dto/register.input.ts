import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class RegisterInput {
	@Field(() => String!)
	email: string

	@Field(() => String!)
	password: string

	@Field(() => Boolean!)
	isEntityFace: boolean

	@Field(() => String!)
	fullName: string

	@Field(() => String!)
	phone: string

	@Field(() => String, { nullable: true })
	avatarPath?: string

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
}
