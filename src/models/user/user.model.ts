import { Injectable } from "@nestjs/common";
import { User } from "./user.type";

@Injectable()
export class UsersService {
    public users: User[] = [
        {name: 'alex123', age: 10},
        {name: 'alex123213', age: 10}
    ];
    constructor() {}
    
    public getUser(name: string) {
        return this.users.find(user => user.name === name);
    }

    public createUser(user: User) {
        return this.users.push(user);
    }
}