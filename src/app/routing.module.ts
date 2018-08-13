import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurriculumVitaeComponent } from "./luminis/curriculum-vitae.component";


const appRoutes: Routes = [
  { path: 'home',        component: HomeComponent },
  { path: 'luminis',        component: CurriculumVitaeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
