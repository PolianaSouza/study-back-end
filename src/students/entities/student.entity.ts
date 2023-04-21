import { Student } from "@prisma/client";

export class StudentEntity implements Student {
  id: string;
  registration: string;
  name: string;
  age: number;
  email: string;
  phone_number: string;
  user_name: string;
  password: string;
  status: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  house_number: string;
  id_course: string;
  createdAt: Date;
  updatedAt: Date;

}
