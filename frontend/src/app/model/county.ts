import { City } from "./city";

export class County {
  _id?: string | number = '';
  name: string = '';
  cities: City[] = [];
}
