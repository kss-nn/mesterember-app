import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/model/city';
import { County } from 'src/app/model/county';
import { User } from 'src/app/model/user';
import { CityService } from 'src/app/service/city.service';
import { CountyService } from 'src/app/service/county.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  county: County = null;
  list$: Observable<County | County[]> = this.countyService.get();
  user: User = null;
  userList$: Observable<User | User[]> = this.userService.get();
  city: City = null;
  cityList$: Observable<City | City[]> = this.cityService.get();

  constructor(
    private countyService: CountyService,
    private userService: UserService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
  }

}
