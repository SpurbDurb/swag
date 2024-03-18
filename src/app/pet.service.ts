import { Injectable } from '@angular/core';
import { PetsComponent } from './pets/pets.component';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: string[] = ["Don Pollo","Chiuaua"];

  constructor() { }

  getPets(): string[] {
    return this.pets;
  }

  addPet(name: string): void {
    this.pets.push(name);
  }
}
