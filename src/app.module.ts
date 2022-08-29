import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tingController } from './ting.controller';
import { tingService } from './ting.service';
import { CatsModule } from './cats/cats.module';
import { TingModule } from './ting/ting.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [CatsModule, TingModule, NoteModule],
  controllers: [AppController,tingController],
  providers: [AppService,tingService],
})
export class AppModule {}
