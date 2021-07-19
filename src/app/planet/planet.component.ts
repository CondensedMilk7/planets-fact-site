import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChildService } from '../child.service';
import { FilteredPlanetData } from '../filtered-planet-data.model';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  planet: FilteredPlanetData;
  currentPlanet = '';
  infoMode: 'overview' | 'structure' | 'geology' = 'overview';

  constructor(
    public route: ActivatedRoute,
    private planetsService: PlanetsService,
    private childService: ChildService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentPlanet = params['planet'];
      this.planet = this.planetsService.getFilteredPlanetData(
        this.currentPlanet,
        this.infoMode
      );
    });
    this.childService.currentChildRoute.next(this.currentPlanet);
  }

  changeInfoMode(filter: 'overview' | 'structure' | 'geology') {
    this.infoMode = filter;
    this.planet = this.planetsService.getFilteredPlanetData(
      this.currentPlanet,
      filter
    );
  }
}
