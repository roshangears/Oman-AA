import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VtpApplyComponent } from './vtp-apply/vtp-apply.component';
import { TrackComponent } from './track/track.component';
import { TrackViewComponent } from './track-view/track-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vtp-apply', component: VtpApplyComponent },
  { path: 'track', component: TrackComponent },
  { path: 'track-view', component: TrackViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
