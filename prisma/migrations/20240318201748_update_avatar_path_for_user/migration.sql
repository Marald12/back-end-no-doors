-- AlterTable
ALTER TABLE "User" ALTER COLUMN "avatarPath" DROP NOT NULL,
ALTER COLUMN "avatarPath" SET DEFAULT '/uploads/avatar/default-avatar.png';
