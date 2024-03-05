import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CrudDocument } from 'src/model/crud.model';

@Injectable()
export class CrudService {
  constructor(@InjectModel('Crud') private readonly crudModel: Model<CrudDocument>) {}

  async create(data: Partial<CrudDocument>): Promise<CrudDocument> {
    const createdYour = new this.crudModel(data);
    return createdYour.save();
  }

  async findAll(): Promise<CrudDocument[]> {
    return this.crudModel.find().exec();
  }

  async findOne(id: string): Promise<CrudDocument | null> {
    return this.crudModel.findById(id).exec();
  }

  async update(id: string, data: Partial<CrudDocument>): Promise<CrudDocument | null> {
    return this.crudModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async remove(id: string): Promise<CrudDocument | null> {
    return this.crudModel.findOneAndDelete({ _id: id }).exec();
  }
}