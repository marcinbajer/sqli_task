import { APIRequestContext } from "@playwright/test";
import { ApiRequest } from "../api/apiRequest";

export class PetService {
  static async getPetsByStatus(request: APIRequestContext, status: string) {
    return await ApiRequest.get(
      request,
      `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`
    );
  }
}
