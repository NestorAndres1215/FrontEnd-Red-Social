import { Component } from '@angular/core';
import { NormalNavbar } from "../../../../shared/components/navbar/normal-navbar/normal-navbar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-normal',
  imports: [NormalNavbar,CommonModule],
  templateUrl: './home-normal.html',
  styleUrl: './home-normal.css'
})
export class HomeNormal {
  metrics = [
    { title: 'Total Users', value: '1,234', icon: 'fa-users', color: '#3b82f6' },
    { title: 'Active Sessions', value: '567', icon: 'fa-user-check', color: '#10b981' },
    { title: 'Reports Generated', value: '89', icon: 'fa-chart-bar', color: '#f59e0b' },
    { title: 'System Alerts', value: '12', icon: 'fa-bell', color: '#ef4444' }
  ];

  recentActivities = [
    { user: 'John Doe', action: 'Updated user profile', time: '2 hours ago' },
    { user: 'Jane Smith', action: 'Generated report', time: '4 hours ago' },
    { user: 'Admin', action: 'Modified settings', time: 'Yesterday' }
  ];
}
