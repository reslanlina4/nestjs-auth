import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ContextCreator } from "@nestjs/core/helpers/context-creator";


@Injectable()
export class AuthenticatedGuard implements CanActivate {

    async canActivate(context:ExecutionContext){
        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated;
    }
}