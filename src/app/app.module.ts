import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routing.module';
import {SharedModule} from './shared/shared.module';
import {CurriculumVitaeModule} from './curriculum-vitea/curriculum-vitae.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CurriculumVitaeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
