import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products: Array<CreateProductDto & { id: number }> = [];
  private idCounter = 1;

  create(dto: CreateProductDto) {
    const newProduct = {
      id: this.idCounter++,
      ...dto,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find(p => p.id === id);
  }
}
