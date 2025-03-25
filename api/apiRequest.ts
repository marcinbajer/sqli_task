import { APIRequestContext } from "@playwright/test";

export class ApiRequest {
  static async post(request: APIRequestContext, url: string, data: any) {
    const response = await request.post(url, { data });
    if (!response.ok()) {
      throw new Error(
        `POST request failed: ${url}, status: ${response.status()}`
      );
    }
    return response;
  }

  static async get(request: APIRequestContext, url: string) {
    const response = await request.get(url);
    if (!response.ok()) {
      throw new Error(
        `GET request failed: ${url}, status: ${response.status()}`
      );
    }
    return response.json();
  }
}
