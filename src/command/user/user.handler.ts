import { ICommand } from '@nestjs/cqrs';

export class UserCreateCommand implements ICommand {
    constructor(
        public readonly name: string,
        public readonly age: number,
    ) {}
}