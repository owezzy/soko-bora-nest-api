import {Controller, Get} from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor (private readonly userService: UserService)

    @Get()
    login(){

    }
}
