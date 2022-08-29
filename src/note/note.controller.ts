import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { Exction } from './note.error';

@Controller('note')
export class NoteController {

@Get("exction")
async exction(){
   throw new Exction();
   
   
}


}
