-- CreateTable
CREATE TABLE "BasketItemsOrBasket" (
    "basketId" INTEGER NOT NULL,
    "basketItemId" INTEGER NOT NULL,

    CONSTRAINT "BasketItemsOrBasket_pkey" PRIMARY KEY ("basketItemId","basketId")
);

-- AddForeignKey
ALTER TABLE "BasketItemsOrBasket" ADD CONSTRAINT "BasketItemsOrBasket_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "Basket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketItemsOrBasket" ADD CONSTRAINT "BasketItemsOrBasket_basketItemId_fkey" FOREIGN KEY ("basketItemId") REFERENCES "BasketItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
