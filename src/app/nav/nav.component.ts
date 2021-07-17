import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Output() currentPlanet = new EventEmitter<string>();
  planetPicked = 'Earth';
  modalActive = false;

  constructor() {}

  ngOnInit(): void {}

  onPlanetClicked(planet: string) {
    this.currentPlanet.emit(planet);

    this.modalActive = false;
  }

  onModalActivated() {
    this.modalActive = !this.modalActive;
  }
}
