import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.scss']
})
export class WorkingHoursComponent implements OnInit {

  user: User = null;
  list$: Observable<User | User[]> = this.userService.get();
  cols: any[] = this.config.userColumns;
  serverError: string = '';

  constructor(
    private userService: UserService,
    private config: ConfigService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap( params => this.userService.get(params.id) )
    )
    .pipe( take(1) )
    .subscribe(
      user => {
        this.user = (user as User);
        this.user.password = '';
      }
    );
  }

  onSubmit(): void {
  }

}
