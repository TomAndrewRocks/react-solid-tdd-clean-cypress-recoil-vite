/* eslint-disable lines-between-class-members */
import axios from 'axios';
import { AxiosHttpClient } from './axios-http-client';
import { mockAxios } from '@/infra/test/mock-axios';
import { mockPostRequest } from '@/data/test/mock-http-post';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  test('Should Call axios with correct payload', async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      request.url,
      request.body,
    );
  });

  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut();
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(
      mockedAxios.post.mock.results[0].value,
    );
  });
});