import {Component, Input} from '@angular/core';
import {Skill} from '../../curriculum-vitae';

@Component({
  selector: 'tern-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skillObject: Skill;
  @Input() secondary: boolean;

  constructor() {}
}
