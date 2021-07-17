import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsService } from './planets.service';

@NgModule({
  declarations: [AppComponent, NavComponent, PlanetComponent],
  imports: [BrowserModule],
  providers: [PlanetsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
