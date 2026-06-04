import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface Project {
  key: string;
  emoji: string;
  title: string;
  status: 'live' | 'dev';
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      key: 'notiva',
      emoji: '📒',
      title: 'Notiva',
      status: 'live',
      tags: ['SwiftUI', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'Redis', 'Liquibase'],
    },
    {
      key: 'tripmate',
      emoji: '✈️',
      title: 'TripMate',
      status: 'live',
      tags: ['SwiftUI', 'MapKit', 'CoreLocation', 'REST API'],
    },
    {
      key: 'eczanem',
      emoji: '💊',
      title: 'EczanemNöbetçi',
      status: 'live',
      tags: ['SwiftUI', 'MapKit', 'REST API', 'CoreLocation'],
    },
    {
      key: 'chat',
      emoji: '💬',
      title: 'Gerçek Zamanlı Chat Sistemi',
      status: 'dev',
      tags: ['Node.js', 'Express.js', 'Socket.IO', 'PostgreSQL', 'JWT', 'AES-GCM', 'ECDH', 'ECDSA', 'HKDF'],
    },
    {
      key: 'restlocations',
      emoji: '🌍',
      title: 'RestLocations',
      status: 'dev',
      tags: ['SwiftUI', 'Spring Boot', 'PostgreSQL', 'MapKit', 'JWT'],
    },
    {
      key: 'auth',
      emoji: '🔐',
      title: 'Auth Service',
      status: 'dev',
      tags: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'Redis', 'Liquibase', 'Docker'],
    },
    {
      key: 'kroki',
      emoji: '🗺️',
      title: 'Kroki Tabanlı Sistem',
      status: 'dev',
      tags: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'PostgreSQL'],
    },
  ];
}
