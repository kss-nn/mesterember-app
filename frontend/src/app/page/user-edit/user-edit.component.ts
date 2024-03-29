import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { County } from 'src/app/model/county';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User = null;
  county: County = null;
  serverError = '';

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
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

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({ _id: Number(this.user._id) }, ngForm.value);
    this.userService.update(putObject)
      .toPromise().then(
        user => history.back(),
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
