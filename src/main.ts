import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initDb } from './db/mysql';
import { AllExceptionsFilter } from './note/note.error';
import { RolesGuard } from './note/note.rolesguard';
import { logger, logger1 } from './note/note.service';
import { LoggingInterceptor } from './note/noteloggingInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   //app.use(logger,logger1)
  app.useGlobalFilters(new AllExceptionsFilter)
 //app.useGlobalGuards(new RolesGuard(new Reflector))
 //app.useGlobalInterceptors(new LoggingInterceptor)
  //app.enableShutdownHooks();
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('note')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  //初始化数据库
  await initDb()
  
}
bootstrap();
