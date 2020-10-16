import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CurrciculumVitae} from '../curriculum-vitae';

@Component({
  selector: 'tern-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() curriculumVitae: CurrciculumVitae;
  @Input() @HostBinding('class.secondary') secondary = false;

  constructor() { }

  ngOnInit(): void {
  }

}
