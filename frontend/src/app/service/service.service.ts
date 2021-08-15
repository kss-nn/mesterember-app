import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../model/service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  entity = 'services';

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) { }

  query(queryString: string): Observable<Service | Service[]> {
    const url = `${this.config.apiUrl}${this.entity}?${queryString}`;
    return this.http.get<Service[]>(url);
  }

  get(id?: string | number): Observable<Service | Service[]> {
    let url = `${this.config.apiUrl}${this.entity}`;
    if (id) {
      url += `/${id}`;
    }

    return this.http.get<Service[]>(url);
  }

  create(service: Service): Observable<Service> {
    const url = `${this.config.apiUrl}${this.entity}/${service._id}`;
    return this.http.post<Service>(url, service);
  }

  update(service: Service): Observable<Service> {
    const url = `${this.config.apiUrl}${this.entity}/${service._id}`;
    return this.http.put<Service>(url, service);
  }

  remove(service: Service): Observable<Service> {
    const url = `${this.config.apiUrl}${this.entity}/${service._id}`;
    return this.http.delete<Service>(url);
  }

}
