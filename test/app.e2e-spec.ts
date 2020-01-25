import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import User from 'src/entities/user.entity';
import { AppModule } from './../src/app.module';

import ormConfig from '../ormconfig.json';

let app: INestApplication;
const config: object = {
  ...ormConfig,
  entities: [User],
};

beforeAll(async () => {
  const moduleFixture = await Test.createTestingModule({
    imports: [
      AppModule,
      TypeOrmModule.forRoot({
        ...config,
        database: 'random-task-assigner-test',
      }),
    ],
  }).compile();

  app = moduleFixture.createNestApplication();
  await app.init();
});

afterAll(async () => {
  await app.close();
});
