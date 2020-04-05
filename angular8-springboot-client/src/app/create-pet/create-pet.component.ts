import { PetService } from "../pet.service";
import { Pet } from "../pet";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-pet",
  templateUrl: "./create-pet.component.html",
  styleUrls: ["./create-pet.component.css"],
})
export class CreatePetComponent implements OnInit {
  pet: Pet = new Pet();
  submitted = false;

  constructor(private petService: PetService, private router: Router) {}

  ngOnInit() {}

  newPet(): void {
    this.submitted = false;
    this.pet = new Pet();
  }

  save() {
    this.petService.createPet(this.pet).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.pet = new Pet();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(["/pets"]);
  }
}
