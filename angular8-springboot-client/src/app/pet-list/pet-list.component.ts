import { PetDetailsComponent } from "../pet-details/pet-details.component";
import { Observable } from "rxjs";
import { PetService } from "../pet.service";
import { Pet } from "../pet";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pet-list",
  templateUrl: "./pet-list.component.html",
  styleUrls: ["./pet-list.component.css"],
})
export class PetListComponent implements OnInit {
  pets: Observable<Pet[]>;

  constructor(private petService: PetService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pets = this.petService.getPetsList();
  }

  deletePet(id: number) {
    this.petService.deletePet(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  petDetails(id: number) {
    this.router.navigate(["details", id]);
  }

  updatePet(id: number) {
    this.router.navigate(["update", id]);
  }
}
