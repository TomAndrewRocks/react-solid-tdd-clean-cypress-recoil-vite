/* eslint-disable lines-between-class-members */
import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { AccountModel } from '@/domain/models/accountModel';
import { Auth, AuthParams } from '@/domain/usecases/auth';

export class RemoteAuth implements Auth {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthParams,
      AccountModel
    >,
  ) {}
  async auth(params: AuthParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
