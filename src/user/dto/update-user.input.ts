import { RegisterInput } from '../../auth/dto/register.input'
import { Field, InputType, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(RegisterInput) {
	@Field(() => Boolean, { nullable: true })
	isEntityFace?: boolean

	@Field(() => String, { nullable: true })
	fullName?: string

	@Field(() => String, { nullable: true })
	phone?: string

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
