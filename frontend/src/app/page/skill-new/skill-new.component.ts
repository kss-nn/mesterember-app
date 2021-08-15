import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-new',
  templateUrl: './skill-new.component.html',
  styleUrls: ['./skill-new.component.scss']
})
export class SkillNewComponent implements OnInit {

  skill: Skill = new Skill();

  constructor(
    private skillService: SkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm): void {
    this.skillService.create(ngForm.value).subscribe(
      skill => this.router.navigate(['/', 'skills']),
      err => console.error(err)
    );
  }

}
