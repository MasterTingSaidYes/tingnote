import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './note/note.error';
import { logger, logger1 } from './note/note.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger,logger1)
  app.useGlobalFilters(new AllExceptionsFilter)
  await app.listen(4000);
  
  
}
bootstrap();
