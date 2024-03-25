import { Injectable } from '@nestjs/common';
import { CreateBasketItemInput } from './dto/create-basket-item.input';
import { UpdateBasketItemInput } from './dto/update-basket-item.input';

@Injectable()
export class BasketItemService {
  create(createBasketItemInput: CreateBasketItemInput) {
    return 'This action adds a new basketItem';
  }

  findAll() {
    return `This action returns all basketItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basketItem`;
  }

  update(id: number, updateBasketItemInput: UpdateBasketItemInput) {
    return `This action updates a #${id} basketItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} basketItem`;
  }
}
