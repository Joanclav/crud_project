import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudSchema } from './model/crud.model';

import { CrudService } from './service/crud.service';
import { CrudController } from './controller/crud.controller';


@Module({
  imports: [
    MongooseModule.forRoot('insertar servidor'),
    MongooseModule.forFeature([{ name: 'Crud', schema: CrudSchema }]),
  ],
  controllers: [CrudController],
  providers: [CrudService],
})
export class AppModule {}
