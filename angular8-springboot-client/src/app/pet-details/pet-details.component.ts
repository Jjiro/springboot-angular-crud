import { Pet } from "../pet";
import { Component, OnInit, Input } from "@angular/core";
import { PetService } from "../pet.service";
import { PetListComponent } from "../pet-list/pet-list.component";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pet-details",
  templateUrl: "./pet-details.component.html",
  styleUrls: ["./pet-details.component.css"],
})
export class PetDetailsComponent implements OnInit {
  id: number;
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petListComponent: PetListComponent,
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

  list() {
    this.router.navigate(["pets"]);
  }
}
