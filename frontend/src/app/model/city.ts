import { County } from "./county";

export class City {
  _id?: string | number = '';
  name: string = '';
  county: County = new County();
}
