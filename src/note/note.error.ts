import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus, Next } from "@nestjs/common";

export class Exction extends HttpException{
    constructor(){
        super("请求成功",HttpStatus.OK)
    }
}

export class AllExceptionsFilter implements ExceptionFilter{
    catch(exception: unknown, host: ArgumentsHost) {
       
        const ctx=host.switchToHttp();
        const response =ctx.getResponse()
        const request=ctx.getRequest()

        const status=exception instanceof HttpException?exception.getStatus():HttpStatus.INTERNAL_SERVER_ERROR
        
        console.log("1111111")
        return response.status(status).json({
           code:HttpStatus.NOT_FOUND,
           message:"找不到"
        })
       
      
       

    }
    
} 
