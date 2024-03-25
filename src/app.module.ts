import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { BasketModule } from './basket/basket.module'
import { AuthModule } from './auth/auth.module'
import { ProductModule } from './product/product.module'
import { CategoryModule } from './category/category.module'
import { DatabaseModule } from './database/database.module'
import { BrandModule } from './brand/brand.module';
import { PhoneModule } from './phone/phone.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: true,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql')
		}),
		ConfigModule.forRoot({
			envFilePath: '.env'
		}),
		UserModule,
		BasketModule,
		AuthModule,
		ProductModule,
		CategoryModule,
		DatabaseModule,
		BrandModule,
		PhoneModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
