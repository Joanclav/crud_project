import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('CRUD PROJECT for ideal control')
    .setDescription(
      'Development of a CRUD (Create, Read, Update, Delete) project with a RESTful API hosted at http://localhost:3000, documented using Swagger for enhanced endpoint interaction and understanding.',
    )
    .setVersion('1.0')
    //tags
    .addTag('Create', 'Endpoints for creating records')
    .addTag('Read', 'Endpoints for reading records')
    .addTag('Update', 'Endpoints for updating records')
    .addTag('Delete', 'Endpoints for deleting records')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
