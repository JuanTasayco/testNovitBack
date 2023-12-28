import { Injectable } from '@nestjs/common';
import { CreateNovitBackDto } from './dto/create-novit-back.dto';
import { UpdateNovitBackDto } from './dto/update-novit-back.dto';

@Injectable()
export class NovitBackService {
  create(createNovitBackDto: CreateNovitBackDto) {
    return 'This action adds a new novitBack';
  }

  findAll() {
    return `This action returns all novitBack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} novitBack`;
  }

  update(id: number, updateNovitBackDto: UpdateNovitBackDto) {
    return `This action updates a #${id} novitBack`;
  }

  remove(id: number) {
    return `This action removes a #${id} novitBack`;
  }
}
