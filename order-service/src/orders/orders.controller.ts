import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import axios from 'axios';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      const productResponse = await axios.get(
        `http://localhost:3001/products/${createOrderDto.productId}`,
      );
      const product = productResponse.data;

      if (!product) return { message: 'Product not found' };

      return this.ordersService.create(createOrderDto, product);
    } catch (error) {
      return { message: 'Product service unavailable or invalid productId' };
    }
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }
}
