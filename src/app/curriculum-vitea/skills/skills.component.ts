import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CurrciculumVitae} from '../curriculum-vitae';

@Component({
  selector: 'tern-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() curriculumVitae: CurrciculumVitae;
  @Input() @HostBinding('class.secondary') secondary = false;

  constructor() { }

  ngOnInit(): void {
  }

}
