import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Output() currentPlanet = new EventEmitter<string>();
  @Input() currentRoute: string;
  modalActive = false;

  constructor() {}

  ngOnInit() {
  }

  onPlanetClicked(planet: string) {
    this.currentPlanet.emit(planet);
    this.modalActive = false;
  }

  onModalActivated() {
    this.modalActive = !this.modalActive;
  }
}
