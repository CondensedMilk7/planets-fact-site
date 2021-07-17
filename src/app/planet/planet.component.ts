import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilteredPlanetData } from '../filtered-planet-data.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  @Input() planet: FilteredPlanetData;
  @Output() filterMode = new EventEmitter();
  @Input() infoMode: 'overview' | 'structure' | 'geology' = 'overview';

  constructor() {}

  ngOnInit() {}

  changeInfoMode(filter: 'overview' | 'structure' | 'geology') {
    this.filterMode.emit(filter);
  }
}
