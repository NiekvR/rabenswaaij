import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routing.module';
import { TooltipComponent } from './directives/tooltip/components/tooltip.component';
import { TooltipDirective } from './directives/tooltip/directive/tooltip.directive';
import { OpenDetailBlockDirective } from "./directives/tooltip/directive/open-detail-block.directive";
import { CurriculumVitaeComponent } from "./luminis/curriculum-vitae.component";
import {OrderByPipe} from "./pipes/order-by.pipe";
import {SkillComponent} from "./luminis/skill/skill.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurriculumVitaeComponent,
    SkillComponent,
    TooltipComponent,
    TooltipDirective,
    OpenDetailBlockDirective,
    OrderByPipe
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TooltipComponent
  ]
})
export class AppModule { }
