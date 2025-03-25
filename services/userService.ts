import { APIRequestContext } from "@playwright/test";
import { ApiRequest } from "../api/apiRequest";

export class UserService {
  static async createUser(request: APIRequestContext, userData: any[]) {
    const response = await ApiRequest.post(
      request,
      "https://petstore.swagger.io/v2/user/createWithList",
      userData
    );
    return response;
  }

  static async getUser(request: APIRequestContext, username: string) {
    return await ApiRequest.get(
      request,
      `https://petstore.swagger.io/v2/user/${username}`
    );
  }
}
