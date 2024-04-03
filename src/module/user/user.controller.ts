import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserGetQuery } from '../../query/user/user.query';
import { UserCreateCommand } from '../../command/user/user.handler';
import { User } from 'src/models/user/user.type';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { contract } from 'src/contract/user';

@Controller()
export class UserController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) { }
    
    @TsRestHandler(contract)
    async handler() {
        return tsRestHandler(contract, {
            getUser: async (data) => {
                const { name } = data.params;
                const res = await this.queryBus.execute(
                    new UserGetQuery(name)
                );
                return { status: 200, body: res }
            },
            createUser: async (data) => {
                const { name, age } = data.body;
                const res = await this.commandBus.execute(
                    new UserCreateCommand(name, age)
                );
                return { status: 200, body: res }
            }
        })
    }
}
