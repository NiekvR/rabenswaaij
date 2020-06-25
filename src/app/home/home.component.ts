import { DataService } from '../services/data.service';
import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private detailBlockElement: Element;
  private projectListElement: Element;
  private openDetailBlockElement: Element;

  public projects: Project[];
  public detailProject: Project;
  public detailBlockButtonHidden: boolean = false;
  public closeDetails: Project;

  constructor(private el: ElementRef, private renderer: Renderer2, private dataService: DataService) { }

  ngOnInit() {
    this.getProjects();
  }

  ngAfterViewInit() {
    this.detailBlockElement = this.el.nativeElement.querySelector('.item.detail');
    this.projectListElement = this.el.nativeElement.querySelector('ul.project-list');
    this.openDetailBlockElement = this.el.nativeElement.querySelector('.open-detail-block');
  }

  getProjects(): void {
    this.dataService.getTERNProjects()
        .subscribe(projects => {
          this.projects = projects;
          console.log(projects);
        });
  }

  detailBlock(index: number, project: Project) {
    if (!this.detailProject) {
      this.openDetailBlock(index, project);
    } else {
      if (this.detailProject.title !== project.title) {
        setTimeout(() => {
          this.openDetailBlock(index, project);
        }, 1000);
      }
      this.closeDetailBlock();
    }
  }

  getDetailBlockPosition(index: number): number {
    return Math.floor((index + 1) / 3) * 3 + 3;
  }

  openDetailBlock(index: number, project: Project) {
    this.closeDetails = project;
    this.renderer.removeChild(this.projectListElement, this.detailBlockElement);
    this.renderer.insertBefore(this.projectListElement, this.detailBlockElement, this.projectListElement.querySelectorAll('li')[this.getDetailBlockPosition(index)]);
    this.detailProject = project;
    setTimeout(() => {
      this.renderer.setStyle(this.detailBlockElement, 'height', `${project.height || 300 }px`);
    }, 25);
    this.detailBlockButtonHidden = true;
  }

  closeDetailBlock() {
    this.closeDetails = null;
    setTimeout(() => {
      this.detailProject = null;
    }, 700);
    this.detailBlockButtonHidden = false;
    this.renderer.setStyle(this.detailBlockElement, 'height', '0');
  }
}
