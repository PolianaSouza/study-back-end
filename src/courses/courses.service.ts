import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesRepository } from './repositories/courses.repository';

@Injectable()
export class CoursesService {

  constructor(private readonly repository: CoursesRepository) {}

  create(createCourseDto: CreateCourseDto) {
    return this.repository.create(createCourseDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.repository.update(id, updateCourseDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
