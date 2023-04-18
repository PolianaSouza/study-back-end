import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsRepository } from './repositories/students.repository';

@Injectable()
export class StudentsService {

  constructor(private readonly repository: StudentsRepository) {}

  create(createStudentDto: CreateStudentDto) {
    return this.repository.create(createStudentDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.repository.update(id, updateStudentDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
