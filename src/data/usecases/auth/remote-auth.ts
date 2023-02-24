import { HttpPostClient } from "@/data/protocols/http/http-post-client";

export class RemoteAuth {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}
  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url);
  }
}
