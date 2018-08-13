import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from '../home/project';
import {CurrciculumVitae} from "../luminis/curriculum-vitae";
import { PROJECTS } from '../../assets/data/tern-projects';
import {CURRICULUMVITAE} from "../../assets/data/luminis-curriculum-vitae";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  getTERNProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getLuminisCurriculumVitae(): Observable<CurrciculumVitae> {
    return of(CURRICULUMVITAE);
  }
}
