-- DropForeignKey
ALTER TABLE "StudentsOnCourses" DROP CONSTRAINT "StudentsOnCourses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "StudentsOnCourses" DROP CONSTRAINT "StudentsOnCourses_studentId_fkey";

-- AlterTable
ALTER TABLE "StudentsOnCourses" ALTER COLUMN "studentId" DROP NOT NULL,
ALTER COLUMN "courseId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "id_course" TEXT NOT NULL DEFAULT 'nulo';

-- AddForeignKey
ALTER TABLE "StudentsOnCourses" ADD CONSTRAINT "StudentsOnCourses_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsOnCourses" ADD CONSTRAINT "StudentsOnCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
