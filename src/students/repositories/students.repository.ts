import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateStudentDto } from "../dto/create-student.dto";
import { UpdateStudentDto } from "../dto/update-student.dto";
import { StudentEntity } from "../entities/student.entity";

@Injectable()
export class StudentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = await this.prisma.student.create({
      data: createStudentDto,
    })
    return student
  }

  async findAll(): Promise<StudentEntity[]> {
    return await this.prisma.student.findMany({
      include: {
        courses: true,
      }
    });
  }

  async findOne(id: string): Promise<StudentEntity> {
    return this.prisma.student.findUnique({
      where: {
        id,
      },
      include: {
        courses: true,
      }
    });
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const student = await this.prisma.student.update({
      where: {
        id,
      },
      data: updateStudentDto,
    })
    return student
  }

  async remove(id: string) {
    const student = await this.prisma.student.delete({
      where: {
        id,
      }
    })
    return student
  }
}
