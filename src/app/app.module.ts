import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PopularComponent } from './components/popular/popular.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { HealthComponent } from './components/health/health.component';
import { SportsComponent } from './components/sports/sports.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { ScienceComponent } from './components/science/science.component';
import { TechnologyComponent } from './components/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PopularComponent,
    PoliticsComponent,
    HealthComponent,
    SportsComponent,
    EntertainmentComponent,
    ScienceComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
