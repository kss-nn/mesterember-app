import { City } from "./city";
import { County } from "./county";

export class User {
  _id?: string | number = '';
  first_name?: string = '';
  last_name?: string = '';
  user_type?: string = '';
  skill?: string = '';
  email?: string = '';
  phone_number?: string = '';
  counties: County[] = [];
  cities: City[] = [];
  working_days?: {
    "monday": boolean,
    "tuesday": boolean,
    "wednesday": boolean,
    "thursday": boolean,
    "friday": boolean,
    "saturday": boolean,
    "sunday": boolean
  };
  working_hours?: {
    "start": number,
    "end": number
  };
  password?: string = '';
  role?: number = 1;
  token?: string = '';
}
