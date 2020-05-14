import {Component, OnInit, Renderer2} from '@angular/core';
import {DataService} from "../services/data.service";
import {CurrciculumVitae} from "./curriculum-vitae";

import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';

@Component({
  selector: 'curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit{
  public curriculumVitae: CurrciculumVitae;

  constructor(private dataService: DataService, private renderer: Renderer2) { }

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

  downloadPdf() {
    let data = document.querySelector('.luminis-circle');
    this.showAllTabContent(data);
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      let imgWidth = 208;
      let imgHeight = canvas.height * imgWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('cv.pdf'); // Generated PDF
    });
  }

  showAllTabContent(data: Element) {
    console.log(data);
    let tabElements = data.querySelectorAll('.tab-content');
    console.log(tabElements);

    for (let i = 0; i < tabElements.length; i++) {
      (<any>tabElements[i]).hidden = false;
    }
  }
}
