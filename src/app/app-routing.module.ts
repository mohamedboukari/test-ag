import { AddstageComponent } from './addstage/addstage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/stage', pathMatch: 'full' },
  { path: 'stage', component: StageComponent },

  { path: 'add-stage', component: AddstageComponent },
  { path: 'not-found', component: Page404Component },

  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
