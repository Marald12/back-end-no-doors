import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ProductService } from './product.service'
import { ProductEntity } from './entities/product.entity'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'

@Resolver(() => ProductEntity)
export class ProductResolver {
	constructor(private readonly productService: ProductService) {}

	@Mutation(() => ProductEntity)
	createProduct(
		@Args('createProductInput') createProductInput: CreateProductInput,
		@Args('phoneId', { type: () => Int }) phoneId: number,
		@Args('categoryId', { type: () => Int }) categoryId: number
	) {
		return this.productService.create(createProductInput, phoneId, categoryId)
	}

	@Query(() => [ProductEntity], { name: 'products' })
	findAll() {
		return this.productService.findAll()
	}

	@Query(() => ProductEntity, { name: 'product' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.productService.findOne(id)
	}

	@Mutation(() => ProductEntity)
	updateProduct(
		@Args('updateProductInput') updateProductInput: UpdateProductInput,
		@Args('id', { type: () => Int }) id: number
	) {
		return this.productService.update(id, updateProductInput)
	}

	@Mutation(() => ProductEntity)
	removeProduct(@Args('id', { type: () => Int }) id: number) {
		return this.productService.remove(id)
	}
}
