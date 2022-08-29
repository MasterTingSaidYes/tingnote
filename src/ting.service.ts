import { Get, Injectable } from "@nestjs/common";

@Injectable()
export class tingService{
  ting():string{
    return "hello world"
  }
}