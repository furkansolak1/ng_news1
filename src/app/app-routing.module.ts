import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PopularComponent } from './components/popular/popular.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { HealthComponent } from './components/health/health.component';
import { SportsComponent } from './components/sports/sports.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { ScienceComponent } from './components/science/science.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'popular',component:PopularComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'health',component:HealthComponent},
  {path:'sports',component:SportsComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'science',component:ScienceComponent},
  {path:'technology',component:TechnologyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
