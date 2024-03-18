import { Component } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  pets: string[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.pets = this.petService.getPets();
  }

  add(name: string): void{
    name = name.trim();
    if (!name) { return; }
    this.petService.addPet(name);
  }
}
