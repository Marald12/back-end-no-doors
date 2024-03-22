import { GqlExecutionContext } from '@nestjs/graphql'
import {
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
	getRequest(context: ExecutionContext) {
		const ctx = GqlExecutionContext.create(context)
		return ctx.getContext().req
	}

	handleRequest(err, user) {
		if (err || !user) {
			throw err || new UnauthorizedException('Вы не авторизованы')
		}
		return user
	}
}
