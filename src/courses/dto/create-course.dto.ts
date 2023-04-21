import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  code_course: string;

  @IsString()
  @IsNotEmpty()
  name_course: string;

  @IsString()
  @IsNotEmpty()
  workload_course: string;
}
