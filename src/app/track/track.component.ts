import { Component } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {
  breadcrumbs = [
    { label: 'Oman Automobile Association', link: '/association' },
    { label: 'Vehicle Transportation Permit', link: '/vehicle-transport' },
    { label: 'Track Update' }
  ];

  applications = [
    {
      id: 'AP-4458',
      name: 'Abdulla Al Rahuman',
      licenceType: 'New',
      createdAt: '12/12/2024 8:00 AM',
      status: 'In Review'
    },
    {
      id: 'AP-0923',
      name: 'Abdulla Al Rahuman',
      licenceType: 'New',
      createdAt: '12/12/2024 8:00 AM',
      status: 'Approved'
    },
    {
      id: 'AP-6712',
      name: 'Abdulla Al Rahuman',
      licenceType: 'New',
      createdAt: '12/12/2024 8:00 AM',
      status: 'Approved'
    }
  ];
  
  
}
