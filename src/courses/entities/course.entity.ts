import { Course } from "@prisma/client";

export class CourseEntity implements Course {
  id: string;
  code_course: string;
  name_course: string;
  workload_course: string;
  createdAt: Date;
  updatedAt: Date;
}
