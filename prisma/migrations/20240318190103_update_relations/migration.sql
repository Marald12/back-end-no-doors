-- DropIndex
DROP INDEX "BasketItemsOrProducts_basketItemId_key";

-- DropIndex
DROP INDEX "BasketItemsOrProducts_productId_key";

-- DropIndex
DROP INDEX "OrderOrBasketItems_basketItemId_key";

-- DropIndex
DROP INDEX "OrderOrBasketItems_orderId_key";

-- AlterTable
ALTER TABLE "OrderOrBasketItems" ADD CONSTRAINT "OrderOrBasketItems_pkey" PRIMARY KEY ("basketItemId", "orderId");
