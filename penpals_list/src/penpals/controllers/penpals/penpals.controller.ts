import { Controller, Delete, Get, Post } from '@nestjs/common';

/**
 * questa classe rappresenta un controller
 * i metodi che gli appartengono corrispondono alle rotte da chiamare
 * per poter effettuare determinate azioni sulla tabella del db
 */
@Controller('penpals')
export class PenpalsController {

    @Get()
    getUsers() {}

    @Post()
    createUser() {}

    @Delete()
    deleteUser() {}

    @Delete()
    deleteAllUsers() {}

}
