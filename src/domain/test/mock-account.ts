import { AccountModel } from '../models/accountModel';
import { AuthParams } from '../usecases/auth';
import faker from 'faker';

export const mockAuth = (): AuthParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
});
