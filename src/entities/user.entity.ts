import { Column, Entity, ObjectID, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'ADMIN',
  EXECUTOR = 'EXECUTOR',
  SUPERVISOR = 'SUPERVISOR',
}

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: ObjectID;

  @Column({ length: 500 })
  uniqueName: string;

  @Column('text')
  password: string;

  @Column()
  isDeactivated: boolean;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.EXECUTOR,
  })
  role: UserRole;
}
