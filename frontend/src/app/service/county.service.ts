import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { County } from '../model/county';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  entity = 'counties';

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) { }

  query(queryString: string): Observable<County | County[]> {
    const url = `${this.config.apiUrl}${this.entity}?${queryString}`;
    return this.http.get<County[]>(url);
  }

  get(id?: string | number): Observable<County | County[]> {
    let url = `${this.config.apiUrl}${this.entity}`;
    if (id) {
      url += `/${id}`;
    }

    return this.http.get<County[]>(url);
  }

  create(county: County): Observable<County> {
    const url = `${this.config.apiUrl}${this.entity}/${county._id}`;
    return this.http.post<County>(url, county);
  }

  update(county: County): Observable<County> {
    const url = `${this.config.apiUrl}${this.entity}/${county._id}`;
    return this.http.put<County>(url, county);
  }

  remove(county: County): Observable<County> {
    const url = `${this.config.apiUrl}${this.entity}/${county._id}`;
    return this.http.delete<County>(url);
  }
}
