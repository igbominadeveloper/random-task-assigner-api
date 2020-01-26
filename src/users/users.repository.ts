import { EntityRepository, Repository } from 'typeorm';

import User from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  /**
   * Get all users in the database
   * @returns {Promise} User
   */
  async find(): Promise<User[]> {
    return this.find();
  }
}
