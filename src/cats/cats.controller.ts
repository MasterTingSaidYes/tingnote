import { Controller, Get } from '@nestjs/common';
import { NoteService } from '../note/note.service';


@Controller('cats')
export class CatsController {
    // constructor(private readonly noteSercvice: NoteService) {}
    // @Get("test2")
    // test(){
    //     this.noteSercvice.test();
    //     return "hhh";
    // }
}
