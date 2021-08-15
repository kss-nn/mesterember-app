import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city';
import { CityService } from 'src/app/service/city.service';

@Component({
  selector: 'app-city-new',
  templateUrl: './city-new.component.html',
  styleUrls: ['./city-new.component.scss']
})
export class CityNewComponent implements OnInit {

  city: City = new City();

  constructor(
    private cityService: CityService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm): void {
    this.cityService.create(ngForm.value).subscribe(
      city => this.router.navigate(['/', 'cities']),
      err => console.error(err)
    );
  }

}
