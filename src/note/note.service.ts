import { Injectable, Scope } from '@nestjs/common';
import { NextFunction } from 'express';
import { t_test } from '../db/models/t_test';
import { testclass } from './note.test';


@Injectable({scope:Scope.REQUEST})
export class NoteService {
  // constructor(private readonly testClass:testclass){}
  //    async test(){
  //     this.testClass.test1()
  //     this.testClass.test1()
  //     this.testClass.test1()
      
  //      return this.testClass.test1()
  //   }
  //查询出数据库的数据
 async dbtest(){
    
    const users = await t_test.findAll();
    return users
  }
//根据条件查询
async selectById(){
  const users=await t_test.findAll({where:{id:1}})
  return users
}

//添加一条数据
async addData(name){
  const users=await t_test.create({
    name:name,
  }
   
  )
}
async update(){
  const users=await t_test.update({ name: "庭大侠" },{
  where :{
    name: "xxx"
  }
  }
  )
}


async delect(){
  const users=await t_test.destroy({
    where: {
      name: "庭大侠"
    }});
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
