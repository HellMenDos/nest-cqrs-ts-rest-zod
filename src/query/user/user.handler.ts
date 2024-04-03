import { Logger } from '@nestjs/common';
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { UserGetQuery } from './user.query';
import { UsersService } from 'src/models/user/user.model';

@QueryHandler(UserGetQuery)
export class UserGetHandler implements IQueryHandler<UserGetQuery> {
    private readonly logger = new Logger(UserGetQuery.name);
    constructor(
        private userService: UsersService,
    ){}

    async execute(command: UserGetQuery): Promise<{}> {
        return this.userService.getUser(command.name);
    }
}