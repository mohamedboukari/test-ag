import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagesComponent } from './stages/stages.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/stage', pathMatch: 'full' },
  { path: 'stage', component: StagesComponent },

  { path: 'add-stage', component: AddStageComponent },
  { path: 'not-found', component: Page404Component },

  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
