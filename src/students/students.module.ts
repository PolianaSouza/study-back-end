import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { StudentsRepository } from './repositories/students.repository';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService, StudentsRepository]
})
export class StudentsModule {}
