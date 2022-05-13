/*
  Warnings:

  - You are about to drop the `Alumnos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Alumnos";

-- CreateTable
CREATE TABLE "Alumno" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionComander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_name_key" ON "Alumno"("name");
