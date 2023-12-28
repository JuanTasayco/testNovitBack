import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNovitBackDto } from './dto/create-novit-back.dto';
import { UpdateNovitBackDto } from './dto/update-novit-back.dto';
import { CreateArchiveDto } from './dto/create-archive.dto';

@Injectable()
export class NovitBackService {
  getNormas() {
    return {
      statusCode: 200,
      messageCode: 'Respuesta disponible',
      data: this.dataNormas,
      totalRegistros: 3,
    };
  }

  getArchive(id: number) {
    if (!id) throw new BadRequestException('No se encuentra el id');
    return {
      statusCode: 200,
      messageCode: 'Respuesta disponible',
      data: this.dataArchives,
      totalRegistros: 6,
    };
  }

  createNorma(createBody: CreateNovitBackDto) {
    return {
      statusCode: 200,
      messageCode: 'Registrado correctamente',
      data: {
        legalNormId: 1,
        archiveId: 1,
        archiveBase64: null,
      },
    };
  }

  createArchive(id: number, bodyArchive: CreateArchiveDto) {
    if (!id) throw new BadRequestException('No se encuentra el id');

    return {
      statusCode: 200,
      messageCode: 'Inserción realizada correctamente',
      data: {
        archiveId: id,
      },
    };
  }

  /* ----------------------------------------------------------------- */
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
    {
      legalNormId: 3,
      legalNormNumber: '888',
      legalNormName: 'Prueba Norma 3',
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
      legalNormId: 1,
      taskId: 2,
      archiveName: 'AccesoDenegado.png',
      achiveNamePhysical: 'DOC_1_582.png',
      archiveDate: '23 / 12 / 2015',
    },
    {
      archiveId: 3,
      legalNormId: 1,
      taskId: 3,
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
    {
      archiveId: 3,
      legalNormId: 3,
      taskId: 2,
      archiveName: 'AccesoPositivo.png',
      achiveNamePhysical: 'DOC_2_583.png',
      archiveDate: '23 / 12 / 2015',
    },
    {
      archiveId: 3,
      legalNormId: 2,
      taskId: 3,
      archiveName: 'AccesoPositivo.png',
      achiveNamePhysical: 'DOC_2_583.png',
      archiveDate: '23 / 12 / 2015',
    },
  ];
}
