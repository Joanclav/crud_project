import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudSchema } from './model/crud.model';

import { CrudService } from './service/crud.service';
import { CrudController } from './controller/crud.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:bHXMvvqUrPoms88P@cluster0.ghxwgc7.mongodb.net/'),
    MongooseModule.forFeature([{ name: 'Crud', schema: CrudSchema }]),
  ],
  controllers: [CrudController],
  providers: [CrudService],
})
export class AppModule {}