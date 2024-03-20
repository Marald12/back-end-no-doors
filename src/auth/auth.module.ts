import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { UserService } from '../user/user.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { jwtConfig } from '../config/jwt.config'

@Module({
	providers: [AuthResolver, AuthService, UserService, JwtStrategy],
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: jwtConfig
		}),
		ConfigModule
	]
})
export class AuthModule {}
