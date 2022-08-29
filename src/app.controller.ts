import { Controller, Get } from '@nestjs/common';
import { retry } from 'rxjs';
import { AppService } from './app.service';
import { Exction } from './note/note.error';
import { NoteService } from './note/note.service';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService,private readonly noteSercvice: NoteService) {}

  @Get() 
  getHello(): string {
    console.log("2222");
    setImmediate(()=>{
      console.log("333")
    })
   Promise.resolve(123).then(g=>{
    console.log("444")
   })
    throw new Exction();
    return this.appService.getHello();
  }


  @Get("test")
  async getTest(){
    let aa = await new Promise((re)=>{
      setImmediate(()=>{
         re("notetest")
        
      })
    })
    console.log(aa)
    


    return Date.now().toLocaleString()
  }
}
