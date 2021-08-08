import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  btnActiveColor = '';

  bgOverview: string;
  bgStructure: string;
  bgGeology: string;

  constructor(
    public route: ActivatedRoute,
    private planetsService: PlanetsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentPlanet = params['planet'];
      this.planet = this.planetsService.getFilteredPlanetData(
        this.currentPlanet,
        this.infoMode
      );
      // corresponds to the color variable names in css file
      // respectively for all planets
      this.btnActiveColor = `var(--${this.currentPlanet})`;
      this.updateInfomodeBtns();
    });
  }

  changeInfoMode(filter: 'overview' | 'structure' | 'geology') {
    this.infoMode = filter;
    this.planet = this.planetsService.getFilteredPlanetData(
      this.currentPlanet,
      filter
    );
    this.updateInfomodeBtns();
  }

  // Updates colors of the active infomode buttons
  updateInfomodeBtns() {
    if (this.infoMode === 'overview') {
      this.bgOverview = this.btnActiveColor;
      this.bgStructure = '';
      this.bgGeology = '';
    } else if (this.infoMode === 'structure') {
      this.bgOverview = '';
      this.bgStructure = this.btnActiveColor;
      this.bgGeology = '';
    } else if (this.infoMode === 'geology') {
      this.bgOverview = '';
      this.bgStructure = '';
      this.bgGeology = this.btnActiveColor;
    }
  }
}
