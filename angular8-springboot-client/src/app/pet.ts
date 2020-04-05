import { DatePipe } from '@angular/common';

export class Pet {
  id: number;
  petName: string;
  ownerName: string;
  species: string;
  dob: DatePipe;
  active: boolean;
}
