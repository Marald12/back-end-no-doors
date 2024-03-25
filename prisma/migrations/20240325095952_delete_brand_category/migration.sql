/*
  Warnings:

  - You are about to drop the `BrandCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BrandCategory" DROP CONSTRAINT "BrandCategory_brandId_fkey";

-- DropTable
DROP TABLE "BrandCategory";
