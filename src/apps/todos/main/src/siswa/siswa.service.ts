import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto, } from './dto/update-siswa.dto';

@Injectable()
export class SiswaService {
  private siswa: CreateSiswaDto[] = [];

   create(createSiswaDto: CreateSiswaDto) {
    this.siswa.push(createSiswaDto);
    return {
      message: 'Siswa berhasil ditambahkan',
      data: createSiswaDto,
    };
  }


  findAll() {
    return this.siswa;
  }

    findOne(nisn: string) {
    const siswa = this.siswa.find((s) => s.nisn === nisn);
    if (!siswa) throw new NotFoundException('Siswa tidak ditemukan');
    return siswa;
  }

  update(nisn: string, updateSiswaDto: UpdateSiswaDto) {
    const index = this.siswa.findIndex((s) => s.nisn === nisn);
    if (index === -1) throw new NotFoundException('Siswa tidak ditemukan');
    this.siswa[index] = { ...this.siswa[index], ...updateSiswaDto };
    return { message: 'Siswa berhasil diperbarui', data: this.siswa[index] };
  }

  remove(nisn: string) {
const index = this.siswa.findIndex((s) => s.nisn === nisn);
    if (index === -1) throw new NotFoundException('Siswa tidak ditemukan');
    const deleted = this.siswa.splice(index, 1);
    return { message: 'Siswa berhasil dihapus', data: deleted[0] };
  }
}
