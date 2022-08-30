import { Injectable, Scope } from "@nestjs/common";

@Injectable({scope:Scope.TRANSIENT})
export class testclass {
  aaa:number = 0
  test1() { 
    return `这是一个服务提供者${this.aaa++}`
  }

}