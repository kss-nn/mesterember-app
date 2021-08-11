import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/model/city';
import { County } from 'src/app/model/county';
import { Skill } from 'src/app/model/skill';
import { User } from 'src/app/model/user';
import { CityService } from 'src/app/service/city.service';
import { ConfigService } from 'src/app/service/config.service';
import { CountyService } from 'src/app/service/county.service';
import { SkillService } from 'src/app/service/skill.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User = null;
  serverError = '';
  userList$: Observable<User | User[]> = this.userService.get();
  countyList$: Observable<County | County[]> = this.countyService.get();
  cityList$: Observable<City | City[]> = this.cityService.get();
  skillList$: Observable<Skill | Skill[]> = this.skillService.get();
  cols: any[] = this.config.userColumns;
  phrase: string = '';
  filterKey: string = 'id';

  constructor(
    private userService: UserService,
    private countyService: CountyService,
    private cityService: CityService,
    private skillService: SkillService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onChangeKey(event: Event): void {
    this.filterKey = (event.target as HTMLInputElement).value;
  }

  setDefault(key): boolean {
    return key === '_id' ? true : false;
  }

}
