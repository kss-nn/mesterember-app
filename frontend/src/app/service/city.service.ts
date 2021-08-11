import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  entity = 'cities';

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) { }

  query(queryString: string): Observable<City | City[]> {
    const url = `${this.config.apiUrl}${this.entity}?${queryString}`;
    return this.http.get<City[]>(url);
  }

  get(id?: string | number): Observable<City | City[]> {
    let url = `${this.config.apiUrl}${this.entity}`;
    if (id) {
      url += `/${id}`;
    }

    return this.http.get<City[]>(url);
  }

  create(city: City): Observable<City> {
    const url = `${this.config.apiUrl}${this.entity}/${city._id}`;
    return this.http.post<City>(url, city);
  }

  update(city: City): Observable<City> {
    const url = `${this.config.apiUrl}${this.entity}/${city._id}`;
    return this.http.put<City>(url, city);
  }

  remove(city: City): Observable<City> {
    const url = `${this.config.apiUrl}${this.entity}/${city._id}`;
    return this.http.delete<City>(url);
  }

}
