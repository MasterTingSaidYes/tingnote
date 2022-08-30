import { Controller, Get, HttpException, HttpStatus, Injectable, Param, ParseBoolPipe, ParseIntPipe, Query, Redirect, UseGuards } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { fibonacci } from '../fec';
import { test } from './note.createParamDecorator';
import { Exction } from './note.error';
import { Auth, RolesGuard } from './note.rolesguard';
import { NoteService } from './note.service';
@ApiTags('note')
@ApiHeader({
   name: 'X-MyHeader',
   description: 'Custom header',
 })
@Controller('note')
export class NoteController {
   NoteController: any;
   constructor(private reflector: NoteService) {}


   @Get("test8")
   test8(){
      //return this.reflector.test()
   }
   @Get("test3")
   async test3(@test() test) {
      console.log(test);
      return "hhh"

   }
   @Get("exction")
   @ApiResponse({ status: 201, description: '自定义响应成功'})
   @ApiResponse({ status: 500, description: '服务器内部错误.'})
   async exction() {
      throw new Exction();


   }

   @Get("test/:id")

   @Auth('admin')
   async findOne(@Param('id', ParseIntPipe) id: number) {
      let res = await Promise.resolve().then(g => {
         console.log("fa")
         return fibonacci(44)
      })
      return res
   }


   @Get("test4")
   test4() {
      return [{ "name": "蔡大侠" }, { "age": "23" }]
   }



   @Get("abcd")
   test5() {
      return "1234";
   }
   @Get("ab*cd")
   test6() {
      return "5678";
   }
   @Get("test7")
   @Redirect()
   test7(@Query('hhh') test8) {
      console.log(test8)
      return { url: `https://www.baidu.com?hhh=${test8}` };;
   }
   @Get("dbtest")
   dbtest(){
    return this.reflector.dbtest();
   }

   @Get("selectById")
   selectById(){
      this.reflector.selectById()
      return this.reflector.selectById()
   }

   @Get("add")
   addtest(){
     return this.reflector.addData("xxx")
   }

   @Get("update")
   update(){
      this.reflector.update()
      return this.reflector.update()
   }
   @Get("delect")
   delect(){
      this.reflector.delect()
      
   }
}




