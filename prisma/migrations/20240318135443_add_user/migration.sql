-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isEntityFace" BOOLEAN NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "companyName" TEXT DEFAULT '',
    "iin" INTEGER DEFAULT 0,
    "kpp" INTEGER DEFAULT 0,
    "ogrp" INTEGER DEFAULT 0,
    "legalAddress" TEXT DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
