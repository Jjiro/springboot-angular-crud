import { Component, OnInit } from "@angular/core";
import { Pet } from "../pet";
import { ActivatedRoute, Router } from "@angular/router";
import { PetService } from "../pet.service";

@Component({
  selector: "app-update-pet",
  templateUrl: "./update-pet.component.html",
  styleUrls: ["./update-pet.component.css"],
})
export class UpdatePetComponent implements OnInit {
  id: number;
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {}

  ngOnInit() {
    this.pet = new Pet();

    this.id = this.route.snapshot.params["id"];

    this.petService.getPet(this.id).subscribe(
      (data) => {
        console.log(data);
        this.pet = data;
      },
      (error) => console.log(error)
    );
  }

  updatePet() {
    this.petService.updatePet(this.id, this.pet).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.pet = new Pet();
    this.gotoList();
  }

  onSubmit() {
    this.updatePet();
  }

  gotoList() {
    this.router.navigate(["/pets"]);
  }
}
