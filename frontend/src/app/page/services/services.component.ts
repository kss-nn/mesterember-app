import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/model/service';
import { ConfigService } from 'src/app/service/config.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  service: Service = null;
  serverError = '';
  list$: Observable<Service | Service[]> = this.serviceService.get();
  cols: any[] = this.config.serviceColumns;
  phrase: string = '';
  filterKey: string = 'id';

  constructor(
    private serviceService: ServiceService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  update(service: Service): void {
    this.serviceService.update(service).toPromise().then(
      serviceResponse => console.log(serviceResponse),
      err => console.error(err)
    );
  }

  onDelete(service: Service): void {
    this.serviceService.remove(service)
      .toPromise().then(
        service => history.back(), // location.reload() kellene, de akkor újra be kellene jelentkezni...
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
