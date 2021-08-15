import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.scss']
})
export class SkillEditComponent implements OnInit {

  skill: Skill = null;
  serverError = '';

  constructor(
    private skillService: SkillService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap( params => this.skillService.get(params.id) )
    )
    .pipe( take(1) )
    .subscribe(
      skill => {
        this.skill = (skill as Skill);
      }
    );
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({ _id: Number(this.skill._id) }, ngForm.value);
    this.skillService.update(putObject)
      .toPromise().then(
        skill => history.back(),
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
