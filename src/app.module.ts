import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './module/user/user.controller';
import { Module } from '@nestjs/common';
import { UserGetHandler } from './query/user/user.handler';
import { UsersService } from './models/user/user.model';
import { UserCreateHandler } from './command/user/user.command';
import { TsRestModule } from '@ts-rest/nest';


@Module({
  imports: [
    TsRestModule.register({
      isGlobal: true,
      jsonQuery: true,
      validateResponses: true,
    }),
    CqrsModule
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserGetHandler,
    UserCreateHandler,
    UsersService
  ],
})
export class AppModule { }
