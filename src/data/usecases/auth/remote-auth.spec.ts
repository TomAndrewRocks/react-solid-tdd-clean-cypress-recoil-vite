/* eslint-disable-all*/

import faker from 'faker';
import { RemoteAuth } from './remote-auth';
import { HttpPostClientSpy } from '@/data/test/mock-http-client';
import { mockAuth } from '@/domain/test/mock-auth';

type SutTypes = {
  sut: RemoteAuth;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (
  url: string = faker.internet.url(),
): SutTypes => {
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
    await sut.auth(mockAuth());
    expect(httpPostClientSpy.url).toBe(url);
  });

  test('Should Call HttpPostClient with Correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authParams = mockAuth()
    await sut.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });
});
