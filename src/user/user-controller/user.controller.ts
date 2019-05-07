import {Controller, Get} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "../user-model/user.interface";

@Controller()
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Get('user')
    async findMe(@User){

    }
}
