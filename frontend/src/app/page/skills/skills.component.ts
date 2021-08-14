import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/skill';
import { ConfigService } from 'src/app/service/config.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skill: Skill = null;
  serverError = '';
  list$: Observable<Skill | Skill[]> = this.skillService.get();
  cols: any[] = this.config.skillColumns;
  phrase: string = '';
  filterKey: string = 'id';

  constructor(
    private skillService: SkillService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  update(skill: Skill): void {
    this.skillService.update(skill).toPromise().then(
      skillResponse => console.log(skillResponse),
      err => console.error(err)
    );
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onChangeKey(event: Event): void {
    this.filterKey = (event.target as HTMLInputElement).value;
  }

  setDefault(key): boolean {
    return key === '_id' ? true : false;
  }

}
