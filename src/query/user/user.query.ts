import { IQuery } from '@nestjs/cqrs';

export class UserGetQuery implements IQuery {
    constructor(
        public readonly name: string
    ) {}
}