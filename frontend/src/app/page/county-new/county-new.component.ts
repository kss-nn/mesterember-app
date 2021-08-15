import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { County } from 'src/app/model/county';
import { CountyService } from 'src/app/service/county.service';

@Component({
  selector: 'app-county-new',
  templateUrl: './county-new.component.html',
  styleUrls: ['./county-new.component.scss']
})
export class CountyNewComponent implements OnInit {

  county: County = new County();

  constructor(
    private countyService: CountyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm): void {
    this.countyService.create(ngForm.value).subscribe(
      county => this.router.navigate(['/', 'counties']),
      err => console.error(err)
    );
  }

}
