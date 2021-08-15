import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/model/city';
import { CityService } from 'src/app/service/city.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  city: City = null;
  serverError = '';
  list$: Observable<City | City[]> = this.cityService.get();
  cols: any[] = this.config.cityColumns;
  phrase: string = '';
  filterKey: string = 'id';

  constructor(
    private cityService: CityService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  update(city: City): void {
    this.cityService.update(city).toPromise().then(
      cityResponse => console.log(cityResponse),
      err => console.error(err)
    );
  }

  onDelete(city: City): void {
    this.cityService.remove(city)
      .toPromise().then(
        city => history.back(), // location.reload() kellene, de akkor újra be kellene jelentkezni...
        err => {
          this.serverError = err.error;
          const to = setTimeout( () => {
            clearTimeout(to);
            this.serverError = '';
          }, 3000);
        }
      )
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
