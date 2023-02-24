import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { AuthParams } from '@/domain/usecases/auth';

export class RemoteAuth {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}
  async auth(params: AuthParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
  }
}
