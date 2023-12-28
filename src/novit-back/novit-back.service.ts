import { Injectable } from '@nestjs/common';
import { CreateNovitBackDto } from './dto/create-novit-back.dto';
import { UpdateNovitBackDto } from './dto/update-novit-back.dto';

@Injectable()
export class NovitBackService {
  create(createNovitBackDto: CreateNovitBackDto) {
    return 'This action adds a new novitBack';
  }

  getNormas() {
    return {};
  }

  getArchive(id: number) {
    return id;
  }

  createArchive(id: number) {
    return id;
  }

  createNorma() {
    return 'norma creada';
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
  dataNormas = [
    {
      legalNormId: 1,
      legalNormNumber: '777',
      legalNormName: 'Prueba Norma',
      legalNormType: 1,
      legalNormDate: '23 / 12 / 2015',
      legalNormDescription: 'Prueba Norma',
      legalNormCreationDate: '23 / 12 / 2015',
      legalNormEffectiveDate: '',
    },
    {
      legalNormId: 2,
      legalNormNumber: '666',
      legalNormName: 'Prueba Norma 2',
      legalNormType: 1,
      legalNormDate: '23 / 12 / 2015',
      legalNormDescription: 'Prueba Norma',
      legalNormCreationDate: '23 / 12 / 2015',
      legalNormEffectiveDate: '',
    },
  ];

  dataArchives = [
    {
      archiveId: 1,
      legalNormId: 1,
      taskId: 1,
      archiveName: 'AccesoDenegado.png',
      achiveNamePhysical: 'DOC_1_582.png',
      archiveDate: '23 / 12 / 2015',
    },
    {
      archiveId: 2,
      legalNormId: 2,
      taskId: 2,
      archiveName: 'AccesoPositivo.png',
      achiveNamePhysical: 'DOC_2_583.png',
      archiveDate: '23 / 12 / 2015',
    },
  ];
}
