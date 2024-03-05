import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CrudDocument } from 'src/model/crud.model';
import { CrudService } from 'src/service/crud.service';

@Controller('crud')
export class CrudController {
  constructor(private readonly CrudService: CrudService) {}

  @Get()
  async findAll(): Promise<CrudDocument[]> {
    return this.CrudService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CrudDocument | null> {
    return this.CrudService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<CrudDocument>): Promise<CrudDocument> {
    return this.CrudService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<CrudDocument>): Promise<CrudDocument | null> {
    return this.CrudService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CrudDocument | null> {
    return this.CrudService.remove(id);
  }
}