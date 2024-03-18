/*
  Warnings:

  - You are about to drop the column `createdAt` on the `FavoritesOnUsers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `FavoritesOnUsers` table. All the data in the column will be lost.
  - Added the required column `views` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FavoritesOnUsers" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "views" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "BrandCategory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "BrandCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasketItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "BasketItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasketItemsOrProducts" (
    "productId" INTEGER NOT NULL,
    "basketItemId" INTEGER NOT NULL,

    CONSTRAINT "BasketItemsOrProducts_pkey" PRIMARY KEY ("productId","basketItemId")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderOrBasketItems" (
    "orderId" INTEGER NOT NULL,
    "basketItemId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BrandCategory_brandId_key" ON "BrandCategory"("brandId");

-- CreateIndex
CREATE UNIQUE INDEX "Basket_userId_key" ON "Basket"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BasketItemsOrProducts_productId_key" ON "BasketItemsOrProducts"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "BasketItemsOrProducts_basketItemId_key" ON "BasketItemsOrProducts"("basketItemId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderOrBasketItems_orderId_key" ON "OrderOrBasketItems"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderOrBasketItems_basketItemId_key" ON "OrderOrBasketItems"("basketItemId");

-- AddForeignKey
ALTER TABLE "BrandCategory" ADD CONSTRAINT "BrandCategory_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketItemsOrProducts" ADD CONSTRAINT "BasketItemsOrProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketItemsOrProducts" ADD CONSTRAINT "BasketItemsOrProducts_basketItemId_fkey" FOREIGN KEY ("basketItemId") REFERENCES "BasketItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderOrBasketItems" ADD CONSTRAINT "OrderOrBasketItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderOrBasketItems" ADD CONSTRAINT "OrderOrBasketItems_basketItemId_fkey" FOREIGN KEY ("basketItemId") REFERENCES "BasketItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
