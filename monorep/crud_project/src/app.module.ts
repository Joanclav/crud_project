import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CrudSchema } from './model/crud.model';
import { CrudService } from './service/crud.service';
import { CrudController } from './controller/crud.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: 'Crud', schema: CrudSchema }]),
  ],
  controllers: [CrudController],
  providers: [CrudService],
})
export class AppModule {}