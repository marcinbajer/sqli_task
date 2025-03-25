import test, { expect, request } from "@playwright/test";
import { UserService } from "../services/userService";
import { PetService } from "../services/petService";
import { Pet } from "../types/pet.type";
import { PetCounter } from "../additional/petCounter";

test("create user", async ({ request }) => {
  const userData = [
    {
      username: "JaneDoe",
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@doe.com",
      password: "Test1234",
      phone: "666555444",
      userStatus: 0,
    },
  ];
  const createResponse = await UserService.createUser(request, userData);
  expect(createResponse.status()).toBe(200);

  const getUserData = await UserService.getUser(request, "JaneDoe");
  expect(getUserData).toMatchObject(userData[0]);
});

test("get pet by status", async ({ request }) => {
  const pets: Pet[] = await PetService.getPetsByStatus(request, "sold");
  const result = pets.map((pet: { id: number; name: string }) => [
    pet.id,
    pet.name,
  ]);

  expect(result).toBeInstanceOf(Array);
  console.log(result);
});

test("count pets with status", async ({ request }) => {
  const pets = await PetService.getPetsByStatus(request, "sold");
  expect(pets.length).toBeGreaterThan(0);
  const petCounter = new PetCounter(pets);
  const petNameCounts = petCounter.countPetsByName();
  console.log(petNameCounts);
});
