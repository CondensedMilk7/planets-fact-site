import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Params,
  Router,
  RouterLink,
} from '@angular/router';
import { FilteredPlanetData } from './filtered-planet-data.model';
import { PlanetsService } from './planets.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'planets-fact-site';
  currentPlanet = '';
  infoMode: 'overview' | 'structure' | 'geology' = 'overview';
  modalActive = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

  }

  onPlanetClicked(planet: string) {
    this.currentPlanet = planet;
    this.router.navigate([`/${planet}`]);
    this.modalActive = false;
  }

  onModalActivated() {
    this.modalActive = !this.modalActive;
  }
}
