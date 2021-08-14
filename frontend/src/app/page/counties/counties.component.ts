import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { County } from 'src/app/model/county';
import { ConfigService } from 'src/app/service/config.service';
import { CountyService } from 'src/app/service/county.service';

@Component({
  selector: 'app-counties',
  templateUrl: './counties.component.html',
  styleUrls: ['./counties.component.scss']
})
export class CountiesComponent implements OnInit {

  county: County = null;
  serverError = '';
  list$: Observable<County | County[]> = this.countyService.get();
  cols: any[] = this.config.countyColumns;
  phrase: string = '';
  filterKey: string = 'id';

  constructor(
    private countyService: CountyService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  update(county: County): void {
    this.countyService.update(county).toPromise().then(
      countyResponse => console.log(countyResponse),
      err => console.error(err)
    );
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
