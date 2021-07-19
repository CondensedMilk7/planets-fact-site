import { PlanetData } from './planet-data.model';
import planetsData from '../assets/planets.json';
import { __classPrivateFieldGet } from 'tslib'; // wtf is this
import { FilteredPlanetData } from './filtered-planet-data.model';

export class PlanetsService {
  fetchedPlanetsData: PlanetData[] = planetsData;

  getFilteredPlanetData(
    planetName: string,
    filter: 'overview' | 'structure' | 'geology'
  ) {
    const planetData = this.getPlanetData(planetName);
    const filteredPlanet: FilteredPlanetData = {
      name: '',
      content: '',
      source: '',
      rotation: '',
      revolution: '',
      radius: '',
      temperature: '',
      image: '',
      overlayImage: '',
    };

    // properties that don't need filter and remain the same
    filteredPlanet.name = planetData.name;
    filteredPlanet.rotation = planetData.rotation;
    filteredPlanet.revolution = planetData.revolution;
    filteredPlanet.radius = planetData.radius;
    filteredPlanet.temperature = planetData.temperature;

    // properties that need filter
    filteredPlanet.content = planetData[filter].content;
    filteredPlanet.source = planetData[filter].source;
    if (filter === 'geology') {
      filteredPlanet.overlayImage = planetData.images[filter];
      filteredPlanet.image = planetData.images.overview;
    } else {
      filteredPlanet.image = planetData.images[filter];
    }

    return filteredPlanet;
  }

  getPlanetData(planetName: string) {
    const retrievedPlanet = this.fetchedPlanetsData.find((object) => {
      return object.name === this.capitalize(planetName);
    });
    return retrievedPlanet;
  }

  // Planet names need to be capitalized because the they are capitalized in the json file and javascript is case sensitive
  capitalize(string: String) {
    return string && string[0].toUpperCase() + string.slice(1);
  }
}
