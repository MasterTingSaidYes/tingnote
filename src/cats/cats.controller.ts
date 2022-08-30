import { Controller, Get } from '@nestjs/common';
import { NoteService } from '../note/note.service';
import { catsService } from './cats.service';


@Controller('cats')
export class CatsController {
    constructor(private readonly t : catsService){}
    // constructor(private readonly noteSercvice: NoteService) {}
    // @Get("test2")
    // test(){
    //     this.noteSercvice.test();
    //     return "hhh";
    // }
    @Get("test")
    test() {
        return this.t.test();
    }
}
