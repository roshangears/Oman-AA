import { Component } from '@angular/core';

@Component({
  selector: 'app-track-view',
  templateUrl: './track-view.component.html',
  styleUrls: ['./track-view.component.scss'],
})
export class TrackViewComponent {
  isFirstDivVisible = true;

  breadcrumbs = [
    { label: 'Oman Automobile Association', link: '/association' },
    { label: 'Vehicle Transportation Permit', link: '/vehicle-transport' },
    { label: 'Track Update' }
  ];

  toggleDivs() {
    this.isFirstDivVisible = !this.isFirstDivVisible;
  }
}
