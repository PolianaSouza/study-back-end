import { PrismaService } from "src/prisma/prisma.service";
import { CreateCourseDto } from "../dto/create-course.dto";
import { CourseEntity } from "../entities/course.entity";
import { UpdateCourseDto } from "../dto/update-course.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CoursesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
    return this.prisma.course.create({
      data: createCourseDto,
    });
  }

  async findAll(): Promise<CourseEntity[]> {
    return await this.prisma.course.findMany({
      include: {
        students: true,
      }
    });
  }

  async findOne(id: string): Promise<CourseEntity> {
    return this.prisma.course.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<CourseEntity> {
    return this.prisma.course.update({
      where: {
        id,
      },
      data: updateCourseDto,
    });
  }

  async remove(id: string): Promise<CourseEntity> {
    return this.prisma.course.delete({
      where: {
        id,
      }
    });
  }
}
