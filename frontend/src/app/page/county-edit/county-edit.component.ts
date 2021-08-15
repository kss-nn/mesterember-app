import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { County } from 'src/app/model/county';
import { CountyService } from 'src/app/service/county.service';

@Component({
  selector: 'app-county-edit',
  templateUrl: './county-edit.component.html',
  styleUrls: ['./county-edit.component.scss']
})
export class CountyEditComponent implements OnInit {

  county: County = null;
  serverError = '';

  constructor(
    private countyService: CountyService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap( params => this.countyService.get(params.id) )
    )
    .pipe( take(1) )
    .subscribe(
      county => {
        this.county = (county as County);
      }
    );
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({ _id: Number(this.county._id) }, ngForm.value);
    this.countyService.update(putObject)
      .toPromise().then(
        county => history.back(),
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
