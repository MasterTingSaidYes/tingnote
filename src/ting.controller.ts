import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { fork } from "child_process";
import { fibonacci } from "./fec";
import { NoteService } from "./note/note.service";
import { tingService } from "./ting.service";

@Controller("ting")
export class tingController{

    constructor(private readonly appService: tingService) {}
    
    // @Get(':id')
    // @HttpCode(HttpStatus.OK)
    // ting1(@Param() params):string{
    //   console.log(params.id)
    //   return Date.now().toLocaleString()
    // }


  //   @Get("test")
  //  async ting(){
  //   this.noteSercvice.test();
   
  //      return "aa"

  //   }

  

}