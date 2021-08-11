import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  entity = 'skills';

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) { }

  query(queryString: string): Observable<Skill | Skill[]> {
    const url = `${this.config.apiUrl}${this.entity}?${queryString}`;
    return this.http.get<Skill[]>(url);
  }

  get(id?: string | number): Observable<Skill | Skill[]> {
    let url = `${this.config.apiUrl}${this.entity}`;
    if (id) {
      url += `/${id}`;
    }

    return this.http.get<Skill[]>(url);
  }

  create(skill: Skill): Observable<Skill> {
    const url = `${this.config.apiUrl}${this.entity}/${skill._id}`;
    return this.http.post<Skill>(url, skill);
  }

  update(skill: Skill): Observable<Skill> {
    const url = `${this.config.apiUrl}${this.entity}/${skill._id}`;
    return this.http.put<Skill>(url, skill);
  }

  remove(skill: Skill): Observable<Skill> {
    const url = `${this.config.apiUrl}${this.entity}/${skill._id}`;
    return this.http.delete<Skill>(url);
  }
}
