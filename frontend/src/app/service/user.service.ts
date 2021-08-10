import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  entity = 'users';

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) { }

  query(queryString: string): Observable<User | User[]> {
    const url = `${this.config.apiUrl}${this.entity}?${queryString}`;
    return this.http.get<User[]>(url);
  }

  get(id?: string | number): Observable<User | User[]> {
    let url = `${this.config.apiUrl}${this.entity}`;
    if (id) {
      url += `/${id}`;
    }

    return this.http.get<User[]>(url);
  }

  create(user: User): Observable<User> {
    const url = `${this.config.apiUrl}${this.entity}/${user._id}`;
    return this.http.post<User>(url, user);
  }

  update(user: User): Observable<User> {
    const url = `${this.config.apiUrl}${this.entity}/${user._id}`;
    return this.http.put<User>(url, user);
  }

  remove(user: User): Observable<User> {
    const url = `${this.config.apiUrl}${this.entity}/${user._id}`;
    return this.http.delete<User>(url);
  }

}
