import { Global, Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { testclass } from './note.test';



@Module({
  controllers: [NoteController],
  providers: [NoteService, testclass],
  exports:[NoteService]
})
export class NoteModule {
  configure(consumer){
    consumer.apply()
  }
}
