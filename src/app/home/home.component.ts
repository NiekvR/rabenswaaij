import {DataService} from '../services/data.service';
import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Project} from './project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public projects: Project[];
  public detailProject: Project;
  public selectedProject: string;
  public displayApp: boolean;
  public closeDetails: Project;
  private detailBlockElement: Element;
  private projectListElement: Element;
  private detailBlockPositionPerListElement: Array<number>;
  private detailBlockPositionInList: Array<number>;
  private listItemSizeMap = {
    'sm': 200,
    'md': 300,
    'lg': 400
  };

  constructor(private el: ElementRef, private renderer: Renderer2, private dataService: DataService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  ngAfterViewInit() {
    this.detailBlockElement = this.el.nativeElement.querySelector('.item.detail');
    this.projectListElement = this.el.nativeElement.querySelector('ul.project-list');
  }

  getProjects(): void {
    this.dataService.getTERNProjects()
      .subscribe(projects => {
        this.projects = projects;
        console.log(projects.length);
        this.mapListElements();
      });
  }

  mapListElements() {
    this.detailBlockPositionPerListElement = new Array<number>();
    this.detailBlockPositionInList = new Array<number>();
    let currentRow = 0;
    let currentRowPixel = 300;
    this.detailBlockPositionPerListElement.push(currentRow);
    if (window.screen.width > 740) {
      const viewPortWidth = window.screen.width < 1000 ? window.screen.width : 1000;
      this.projects.forEach((project, index) => {
        currentRowPixel += this.listItemSizeMap[project.size];
        if (currentRowPixel > viewPortWidth) {
          this.detailBlockPositionInList.push(index + 1);
          currentRowPixel = this.listItemSizeMap[project.size];
          currentRow++;
        }

        this.detailBlockPositionPerListElement.push(currentRow);
      });
      this.detailBlockPositionInList.push(this.projects.length + 1);
    } else {
      this.projects.forEach((project, index) => {
        this.detailBlockPositionPerListElement.push(index);
        this.detailBlockPositionInList.push(index + 2);
      });
    }
  }

  public detailBlock(event, index: number, project: Project) {
    if (!this.detailProject) {
      this.selectedProject = project.title;
      this.openDetailBlock(index, project);
    } else {
      if (this.detailProject.title !== project.title) {
        this.selectedProject = project.title;
        setTimeout(() => {
          this.openDetailBlock(index, project);
        }, 1000);
      }
      this.closeDetailBlock();
    }
  }

  openDetailBlock(index: number, project: Project) {
    this.closeDetails = project;
    this.renderer.insertBefore(this.projectListElement, this.detailBlockElement, this.projectListElement.querySelectorAll('li')[this.detailBlockPositionInList[this.detailBlockPositionPerListElement[index + 1]]]);
    setTimeout(() => {
      this.detailProject = project;
    }, 25);
    setTimeout(() => {
      if (project.title === 'Veldweekend') {
        this.displayApp = true;
      }
    }, 1500);
  }

  closeDetailBlock() {
    this.closeDetails = null;
    setTimeout(() => {
      this.detailProject = null;
    }, 700);
    setTimeout(() => {
      this.renderer.removeChild(this.projectListElement, this.detailBlockElement);
    }, 900);
  }
}
