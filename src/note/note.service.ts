import { Injectable } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class NoteService {
     async test(){

        console.log("notetest");
    }
}
export   function logger(req: Request, res: Response, next: NextFunction){
    console.log("第一个");
      next();
    console.log("第一个.1");
}
export   function logger1(req: Request, res: Response, next: NextFunction){
    console.log("第二个")
 
      next()
    console.log("第二个.2");
}
