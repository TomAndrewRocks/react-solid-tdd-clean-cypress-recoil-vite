/* eslint-disable lines-between-class-members */

import faker from 'faker';
import { RemoteAuth } from './remote-auth';
import { HttpPostClientSpy } from '@/data/test/mock-http-client';
import {
  mockAccountModel,
  mockAuth,
} from '@/domain/test/mock-account';
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { AuthParams } from '@/domain/usecases/auth';
import { AccountModel } from '@/domain/models/accountModel';

type SutTypes = {
  sut: RemoteAuth;
  httpPostClientSpy: HttpPostClientSpy<
    AuthParams,
    AccountModel
  >;
};

const makeSut = (
  url: string = faker.internet.url(),
): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AuthParams,
    AccountModel
  >();
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
    const authParams = mockAuth();
    await sut.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });

  test('Should throw UnauthorizedCredentials if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.auth(mockAuth());
    await expect(promise).rejects.toThrow(
      new InvalidCredentialsError(),
    );
  });

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.auth(mockAuth());
    await expect(promise).rejects.toThrow(
      new UnexpectedError(),
    );
  });

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.auth(mockAuth());
    await expect(promise).rejects.toThrow(
      new UnexpectedError(),
    );
  });

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = sut.auth(mockAuth());
    await expect(promise).rejects.toThrow(
      new UnexpectedError(),
    );
  });

  test('Should return AccountModel if HttpPost returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const httpResult = mockAccountModel();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const account = await sut.auth(mockAuth());
    expect(account).toEqual(httpResult);
  });
});
