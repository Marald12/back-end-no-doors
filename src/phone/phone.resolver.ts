import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PhoneService } from './phone.service'
import { PhoneEntity } from './entities/phone.entity'
import { CreatePhoneInput } from './dto/create-phone.input'
import { UpdatePhoneInput } from './dto/update-phone.input'

@Resolver(() => PhoneEntity)
export class PhoneResolver {
	constructor(private readonly phoneService: PhoneService) {}

	@Mutation(() => PhoneEntity)
	createPhone(
		@Args('createPhoneInput') createPhoneInput: CreatePhoneInput,
		@Args('brandId', { type: () => Int }) brandId: number
	) {
		return this.phoneService.create(createPhoneInput, brandId)
	}

	@Query(() => [PhoneEntity], { name: 'phones' })
	findAll() {
		return this.phoneService.findAll()
	}

	@Query(() => PhoneEntity, { name: 'phone' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.phoneService.findOne(id)
	}

	@Mutation(() => PhoneEntity)
	updatePhone(@Args('updatePhoneInput') updatePhoneInput: UpdatePhoneInput) {
		return this.phoneService.update(updatePhoneInput.id, updatePhoneInput)
	}

	@Mutation(() => PhoneEntity)
	removePhone(@Args('id', { type: () => Int }) id: number) {
		return this.phoneService.remove(id)
	}
}
