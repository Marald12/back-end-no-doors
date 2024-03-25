import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { CategoryEntity } from './entities/category.entity'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'

@Resolver(() => CategoryEntity)
export class CategoryResolver {
	constructor(private readonly categoryService: CategoryService) {}

	@Mutation(() => CategoryEntity)
	createCategory(
		@Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
		@Args('phoneId', { type: () => Int }) phoneId: number
	) {
		return this.categoryService.create(createCategoryInput, phoneId)
	}

	@Query(() => [CategoryEntity], { name: 'categories' })
	findAll() {
		return this.categoryService.findAll()
	}

	@Query(() => CategoryEntity, { name: 'category' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.categoryService.findOne(id)
	}

	@Mutation(() => CategoryEntity)
	updateCategory(
		@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
		@Args('id', { type: () => Int }) id: number
	) {
		return this.categoryService.update(+id, updateCategoryInput)
	}

	@Mutation(() => String)
	removeCategory(@Args('id', { type: () => Int }) id: number) {
		return this.categoryService.remove(id)
	}
}
