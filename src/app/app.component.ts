import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  currentPlanet = '';
  infoMode: 'overview' | 'structure' | 'geology' = 'overview';

  constructor(
    private planetsService: PlanetsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // This doesn't work
    this.route.firstChild.params.subscribe((params) => {
      this.currentPlanet = params['planet'];
      console.log(this.currentPlanet);
    });
  }

  onPlanetPicked(planet: string) {
    this.infoMode = 'overview';
    this.planetData = this.planetsService.getFilteredPlanetData(
      planet,
      this.infoMode
    );
    this.currentPlanet = planet;
    this.router.navigate([`/${planet}`]);
  }

  onChangeInfoMode(filter: 'overview' | 'structure' | 'geology') {
    this.planetData = this.planetsService.getFilteredPlanetData(
      this.currentPlanet,
      filter
    );
    this.infoMode = filter;
  }
}
