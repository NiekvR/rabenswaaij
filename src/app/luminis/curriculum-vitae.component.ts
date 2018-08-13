import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {CurrciculumVitae} from "./curriculum-vitae";

@Component({
  selector: 'curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit{
  public curriculumVitae: CurrciculumVitae;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCurriculumVitae();
  }

  getCurriculumVitae(): void {
    this.dataService.getLuminisCurriculumVitae()
      .subscribe(curriculumVitae => {
        this.curriculumVitae = curriculumVitae;
        console.log(curriculumVitae);
      });
  }
}
