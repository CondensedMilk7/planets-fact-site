import { Component, OnInit } from '@angular/core';
import { FilteredPlanetData } from './filtered-planet-data.model';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'planets-fact-site';
  planetData: FilteredPlanetData;
  currentPlanet = 'Earth';
  infoMode: 'overview' | 'structure' | 'geology' = 'overview';

  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {
    this.planetData = this.planetsService.getFilteredPlanetData(
      this.currentPlanet,
      this.infoMode
    );
    this.currentPlanet = 'Earth';
  }

  onPlanetPicked(planet: string) {
    this.infoMode = 'overview';
    this.planetData = this.planetsService.getFilteredPlanetData(
      planet,
      this.infoMode
    );
    this.currentPlanet = planet;
  }

  onChangeInfoMode(filter: 'overview' | 'structure' | 'geology') {
    this.planetData = this.planetsService.getFilteredPlanetData(
      this.currentPlanet,
      filter
    );
    this.infoMode = filter;
  }
}
