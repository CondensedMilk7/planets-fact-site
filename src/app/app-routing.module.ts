import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: ':planet', component: PlanetComponent },
  { path: '', redirectTo: '/earth', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
