import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tingController } from './ting.controller';
import { tingService } from './ting.service';
import { CatsModule } from './cats/cats.module';
import { TingModule } from './ting/ting.module';
import { NoteModule } from './note/note.module';
import { CatsController } from './cats/cats.controller';
import { catsService } from './cats/cats.service';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './config/config';

@Module({
  imports: [CatsModule, TingModule, NoteModule, ConfigModule.forRoot({
    ignoreEnvFile: false, // 忽视默认读取.env的文件配置
    isGlobal: true, // 全局注入
    load: [getConfig], // 加载配置文件
  }),],
  controllers: [AppController,tingController],
  providers: [AppService,tingService],
})
export class AppModule {}
