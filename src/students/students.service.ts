import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsRepository } from './repositories/students.repository';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(private readonly repository: StudentsRepository) {}

  create(createStudentDto: CreateStudentDto) {
    return this.repository.create(createStudentDto);
  }

  findAll() {
    // throw new UnauthorizedError('Não autorizado');
    return this.repository.findAll();
  }

  async findOne(id: string): Promise<StudentEntity> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundError('Estudante não encontrado!');
    }

    return user;
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.repository.update(id, updateStudentDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
