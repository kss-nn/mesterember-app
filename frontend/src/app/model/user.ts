export class User {
  _id?: string | number;
  first_name?: string;
  last_name?: string;
  user_type?: string;
  skill?: string;
  email?: string;
  phone_number?: string;
  counties: string[];
  cities: string[];
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
  password?: string;
  role?: number;
  token?: string;
}
