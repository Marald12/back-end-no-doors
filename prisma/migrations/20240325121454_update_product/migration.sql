-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "views" DROP NOT NULL,
ALTER COLUMN "views" SET DEFAULT 0;
