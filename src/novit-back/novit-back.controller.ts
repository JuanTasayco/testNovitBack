import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NovitBackService } from './novit-back.service';
import { CreateNovitBackDto } from './dto/create-novit-back.dto';
import { CreateArchiveDto } from './dto/create-archive.dto';

@Controller('novit-back')
export class NovitBackController {
  constructor(private readonly novitBackService: NovitBackService) {}

  @Get('legalNorms')
  getNormas() {
    return this.novitBackService.getNormas();
  }

  @Get('legalNorm/:idNorma/archive')
  getArchive(@Param('idNorma') id: number) {
    return this.novitBackService.getArchive(id);
  }

  @Post('/legalNorm/:idNorma/archive')
  createArchive(
    @Param('idNorma') id: number,
    @Body() createBody: CreateArchiveDto,
  ) {
    return this.novitBackService.createArchive(id, createBody);
  }

  @Post('legalNorm')
  createNorma(@Body() createBody: CreateNovitBackDto) {
    return this.novitBackService.createNorma(createBody);
  }

  /*  
  
    @Post()
  create(@Body() createNovitBackDto: CreateNovitBackDto) {
    return this.novitBackService.create(createNovitBackDto);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novitBackService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNovitBackDto: UpdateNovitBackDto,
  ) {
    return this.novitBackService.update(+id, updateNovitBackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novitBackService.remove(+id);
  } */
}
