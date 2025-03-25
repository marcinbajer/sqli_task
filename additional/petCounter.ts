import { Pet } from "../types/pet.type";


export class PetCounter {
  private pets: Pet[];

  constructor(pets: Pet[]) {
    this.pets = pets;
  }

  // Method to count pets by name
  countPetsByName(): { [key: string]: number } {
    const petNameCount: { [key: string]: number } = {};

    // Loop through each pet in the list
    this.pets.forEach(pet => {
        if (petNameCount[pet.name]) {
          petNameCount[pet.name]++;
        } else {
          petNameCount[pet.name] = 1;
        }
    });

    return petNameCount;
  }
}