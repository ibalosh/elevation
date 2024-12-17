/*
  Warnings:

  - Added the required column `lat` to the `MostRecentElevation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `MostRecentElevation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Elevation" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL;
