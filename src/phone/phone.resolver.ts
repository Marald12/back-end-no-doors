import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PhoneService } from './phone.service';
import { Phone } from './entities/phone.entity';
import { CreatePhoneInput } from './dto/create-phone.input';
import { UpdatePhoneInput } from './dto/update-phone.input';

@Resolver(() => Phone)
export class PhoneResolver {
  constructor(private readonly phoneService: PhoneService) {}

  @Mutation(() => Phone)
  createPhone(@Args('createPhoneInput') createPhoneInput: CreatePhoneInput) {
    return this.phoneService.create(createPhoneInput);
  }

  @Query(() => [Phone], { name: 'phone' })
  findAll() {
    return this.phoneService.findAll();
  }

  @Query(() => Phone, { name: 'phone' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.phoneService.findOne(id);
  }

  @Mutation(() => Phone)
  updatePhone(@Args('updatePhoneInput') updatePhoneInput: UpdatePhoneInput) {
    return this.phoneService.update(updatePhoneInput.id, updatePhoneInput);
  }

  @Mutation(() => Phone)
  removePhone(@Args('id', { type: () => Int }) id: number) {
    return this.phoneService.remove(id);
  }
}
