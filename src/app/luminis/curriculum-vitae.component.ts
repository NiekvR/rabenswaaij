import {Component, OnInit, Renderer2} from '@angular/core';
import {DataService} from "../services/data.service";
import {CurrciculumVitae} from "./curriculum-vitae";

import * as jspdf from 'jspdf';
import * as moment from 'moment';

import html2canvas from 'html2canvas';
import { from, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

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
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF

    this.hideTabs(data);
    this.showTabContent(data, 0);

    this.convertHtmlToPDF(data as HTMLElement, pdf)
      .pipe(
        tap(() => pdf.addPage()),
        tap(() => this.hidePersonalia(data)),
        tap(() => this.showTabContent(data, 1)),
        switchMap(() => this.convertHtmlToPDF(data as HTMLElement, pdf)),
        tap(() => pdf.addPage()),
        tap(() => this.showTabContent(data, 2)),
        switchMap(() => this.convertHtmlToPDF(data as HTMLElement, pdf)))
      .subscribe(() => pdf.save(`Luminis Profiel Niek van Rabenswaaij ${ moment().format('YYYYMMDD')}.pdf`))
  }

  showTabContent(data: Element, index: number) {
    let tabElements = data.querySelectorAll('.tab-content');

    for (let i = 0; i < tabElements.length; i++) {
      (<any>tabElements[i]).hidden = true;
      (<any>tabElements[i]).style.borderTop = 'none';
    }

    (<any>tabElements[index]).hidden = false;
  }

  private convertHtmlToPDF(html: HTMLElement, pdf: any): Observable<HTMLCanvasElement> {
    return from(html2canvas(html))
      .pipe(tap(canvas => this.htmlCanvasElementToPdf(canvas, pdf)));
  }

  private htmlCanvasElementToPdf(canvas: HTMLCanvasElement, pdf: any) {
    let imgWidth = 208;
    let imgHeight = canvas.height * imgWidth / canvas.width;

    const contentDataURL = canvas.toDataURL('image/png')

    pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
  }

  private hideTabs(data: Element) {
    const tabs = data.querySelector('.tabs-container');
    (<any>tabs).style.display = 'none';
  }

  private hidePersonalia(data: Element) {
    const personalia = data.querySelectorAll('.personalia');
    for (let i = 0; i < personalia.length; i++) {
      (<any>personalia[i]).style.display = 'none';
    }
  }

  private printPojects(data: Element) {
    const projects = data.querySelectorAll('.project');

  }
}
