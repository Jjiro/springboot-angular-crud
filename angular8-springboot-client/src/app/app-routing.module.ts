import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";

import { PetDetailsComponent } from "./pet-details/pet-details.component";
import { CreatePetComponent } from "./create-pet/create-pet.component";
import { PetListComponent } from "./pet-list/pet-list.component";
import { UpdatePetComponent } from "./update-pet/update-pet.component";

const routes: Routes = [
  { path: "", redirectTo: "employee", pathMatch: "full" },
  { path: "employees", component: EmployeeListComponent },
  { path: "add-employee", component: CreateEmployeeComponent },
  { path: "update-employee/:id", component: UpdateEmployeeComponent },
  { path: "details-employee/:id", component: EmployeeDetailsComponent },
  { path: "pets", component: PetListComponent },
  { path: "add-pet", component: CreatePetComponent },
  { path: "update-pet/:id", component: UpdatePetComponent },
  { path: "details-pet/:id", component: PetDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
      //preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
