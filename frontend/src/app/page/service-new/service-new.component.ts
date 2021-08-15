import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/model/service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-service-new',
  templateUrl: './service-new.component.html',
  styleUrls: ['./service-new.component.scss']
})
export class ServiceNewComponent implements OnInit {

  service: Service = new Service();

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm): void {
    this.serviceService.create(ngForm.value).subscribe(
      service => this.router.navigate(['/', 'services']),
      err => console.error(err)
    );
  }

}
