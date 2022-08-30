import { Injectable, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit, Scope } from "@nestjs/common";


@Injectable({scope:Scope.DEFAULT})
export class catsService implements OnApplicationShutdown,OnModuleInit,OnApplicationBootstrap,OnModuleDestroy{
    onModuleDestroy() {
       console.log("onModuleDestroy")
    }
    onApplicationBootstrap() {
        console.log("onApplicationBootstrap")
    }
    onModuleInit() {
        console.log("onModuleInit")
    }
    beforeApplicationShutdown(){
        console.log("beforeApplicationShutdown")
    }
    onApplicationShutdown(signal?: string) {
        console.log("onApplicationShutdown"); // e.g. "SIGINT"
    }

    test(){
        return "aaa";
    }

    
    
}