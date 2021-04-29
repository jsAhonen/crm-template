import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customersRepository.create(createCustomerDto);
  }

  async findAll() {
    return await this.customersRepository.find();
  }

  async findOne(id: number) {
    const customer = await this.customersRepository.findOne(id);

    if (!customer) {
      throw new HttpException(
        `Customer #${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customersRepository.preload({
      id: +id,
      ...updateCustomerDto,
    });
    if (!customer) {
      throw new HttpException(
        `Customer #${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.customersRepository.save(customer);
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    return this.customersRepository.remove(customer);
  }
}
