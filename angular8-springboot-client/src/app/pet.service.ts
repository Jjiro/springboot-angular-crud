import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PetService {
  private baseUrl = "http://localhost:8080/springboot-crud-rest/api/v1/pets";

  constructor(private http: HttpClient) {}

  getPet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPet(pet: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, pet);
  }

  updatePet(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getPetsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
