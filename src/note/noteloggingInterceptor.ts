import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();
        console.log(`响应前 ${Date.now() - now}ms`);
    
        
        return next
          .handle()
          .pipe(
            tap(() => console.log(`响应后... ${Date.now() - now}ms`)),
          );
      }
      
   
    
}