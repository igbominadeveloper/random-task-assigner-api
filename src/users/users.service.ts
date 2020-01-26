import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import User from '../entities/user.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
