import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { catsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers:[catsService]
})
export class CatsModule {}
