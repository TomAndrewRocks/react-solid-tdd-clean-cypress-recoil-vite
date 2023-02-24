/*eslint-disable-all*/

import faker from 'faker';
import { RemoteAuth } from './remote-auth';
import { HttpPostClientSpy } from '@/data/test/mock-http-client';

type SutTypes = {
  sut: RemoteAuth;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuth(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuth', () => {
  test('Should Call HttpPostClient with Correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
