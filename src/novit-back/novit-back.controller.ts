import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NovitBackService } from './novit-back.service';
import { CreateNovitBackDto } from './dto/create-novit-back.dto';
import { UpdateNovitBackDto } from './dto/update-novit-back.dto';

@Controller('novit-back')
export class NovitBackController {
  constructor(private readonly novitBackService: NovitBackService) {}

  @Post()
  create(@Body() createNovitBackDto: CreateNovitBackDto) {
    return this.novitBackService.create(createNovitBackDto);
  }

  @Get()
  findAll() {
    return this.novitBackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novitBackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovitBackDto: UpdateNovitBackDto) {
    return this.novitBackService.update(+id, updateNovitBackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novitBackService.remove(+id);
  }
}
