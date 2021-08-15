import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { City } from 'src/app/model/city';
import { CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.scss']
})
export class CityEditComponent implements OnInit {

  city: City = null;
  serverError = '';

  constructor(
    private cityService: CityService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap( params => this.cityService.get(params.id) )
    )
    .pipe( take(1) )
    .subscribe(
      city => {
        this.city = (city as City);
      }
    );
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({ _id: Number(this.city._id) }, ngForm.value);
    this.cityService.update(putObject)
      .toPromise().then(
        city => history.back(),
        err => {
          this.serverError = err.error;
          const to = setTimeout( () => {
            clearTimeout(to);
            this.serverError = '';
          }, 3000);
        }
      );
  }

}
