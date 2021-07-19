import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { FilteredPlanetData } from './filtered-planet-data.model';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'planets-fact-site';
  currentPlanet = 'earth';
  infoMode: 'overview' | 'structure' | 'geology' = 'overview';

  constructor(
    private planetsService: PlanetsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

  }

  onPlanetPicked(planet: string) {
    this.currentPlanet = planet;
    this.router.navigate([`/${planet}`]);
  }


}
