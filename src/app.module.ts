import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { BasketModule } from './basket/basket.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

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
		ProductModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
