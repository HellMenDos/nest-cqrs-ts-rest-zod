import { Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UsersService } from 'src/models/user/user.model';
import { UserCreateCommand } from './user.handler';

@CommandHandler(UserCreateCommand)
export class UserCreateHandler implements ICommandHandler<UserCreateCommand> {
    private readonly logger = new Logger(UserCreateCommand.name);
    constructor(
        private userService: UsersService,
    ){}

    async execute(command: UserCreateCommand): Promise<{}> {
        console.log(command);
        return this.userService.createUser({ name: command.name, age: command.age });
    }
}