import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Service } from 'src/app/model/service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.scss']
})
export class ServiceEditComponent implements OnInit {

  service: Service = null;
  serverError = '';

  constructor(
    private serviceService: ServiceService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap( params => this.serviceService.get(params.id) )
    )
    .pipe( take(1) )
    .subscribe(
      service => {
        this.service = (service as Service);
      }
    );
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({ _id: Number(this.service._id) }, ngForm.value);
    this.serviceService.update(putObject)
      .toPromise().then(
        service => history.back(),
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
