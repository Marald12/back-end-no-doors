import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { User } from '@prisma/client'

export const CurrentUser = createParamDecorator(
	(data: User, context: ExecutionContext) => {
		const ctx = GqlExecutionContext.create(context)
		return ctx.getContext().req.user
	}
)
