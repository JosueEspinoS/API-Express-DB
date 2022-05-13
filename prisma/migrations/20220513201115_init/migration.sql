-- CreateTable
CREATE TABLE "Alumnos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionComander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Alumnos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumnos_name_key" ON "Alumnos"("name");
