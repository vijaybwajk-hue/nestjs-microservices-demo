import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

interface Order {
  id: number;
  productId: number;
  product: any;
  quantity: number;
  customerName?: string;
  address?: string;
}


@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  private idCounter = 1;

  create(orderDto: CreateOrderDto, product: any): Order {
  const order: Order = {
    id: this.idCounter++,
    productId: orderDto.productId,
    product,
    quantity: orderDto.quantity,
    customerName: orderDto.customerName,
    address: orderDto.address,
  };

  this.orders.push(order);
  return order;
}


  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order | undefined {
    return this.orders.find((o) => o.id === id);
  }
}
