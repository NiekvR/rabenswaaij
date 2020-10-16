import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurriculumVitaeComponent} from './curriculum-vitae.component';
import {SkillsComponent} from './skills/skills.component';
import {SkillComponent} from './skills/skill/skill.component';
import {TabsComponent} from './tabs/tabs.component';
import {TabComponent} from './tabs/tab/tab.component';
import {SharedModule} from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    CurriculumVitaeComponent,
    SkillsComponent,
    SkillComponent,
    TabsComponent,
    TabComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CurriculumVitaeComponent,
    SkillsComponent,
    ProfileComponent
  ]
})
export class CurriculumVitaeModule { }
