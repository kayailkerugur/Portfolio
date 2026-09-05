import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

export interface Project {
  key: string;
  emoji: string;
  title: string;
  status: 'live' | 'dev';
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  detailUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [TranslateModule, FadeInDirective, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      key: 'aichat',
      emoji: '🤖',
      title: 'AIChat',
      status: 'dev',
      featured: true,
      detailUrl: '/projects/aichat',
      repoUrl: 'https://github.com/kayailkerugur/AIChat',
      tags: ['Swift', 'SwiftUI', 'AI', 'SSE', 'Core Data', 'OAuth 2.0', 'Git', 'Swift SDK'],
    },
    {
      key: 'notiva',
      emoji: '📒',
      title: 'Notiva',
      status: 'live',
      featured: true,
      detailUrl: '/projects/notiva',
      appStoreUrl: 'https://apps.apple.com/tr/app/notiva-notes-tasks-focus/id6450840399',
      tags: ['SwiftUI', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'Redis', 'Liquibase'],
    },
    {
      key: 'tripmate',
      emoji: '✈️',
      title: 'TripMate',
      status: 'live',
      featured: true,
      detailUrl: '/projects/tripmate',
      appStoreUrl: 'https://apps.apple.com/tr/app/tripmate/id6761005038',
      tags: ['SwiftUI', 'MapKit', 'CoreLocation', 'REST API'],
    },
    {
      key: 'eczanem',
      emoji: '💊',
      title: 'Eczanem Nöbetçi',
      status: 'live',
      appStoreUrl: 'https://apps.apple.com/tr/app/eczanem-n%C3%B6bet%C3%A7i/id1673717286',
      tags: ['SwiftUI', 'MapKit', 'REST API', 'CoreLocation'],
    },
    {
      key: 'grammivo',
      emoji: '📚',
      title: 'Grammivo',
      status: 'live',
      appStoreUrl: 'https://apps.apple.com/tr/app/grammivo/id6790207589',
      tags: ['SwiftData', 'Apple Vision', 'Keychain', 'Gemini'],
    },
    {
      key: 'chat',
      emoji: '💬',
      title: 'Gerçek Zamanlı Chat Sistemi',
      status: 'dev',
      featured: true,
      detailUrl: '/projects/chat',
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

  readonly featuredProjects = this.projects.filter(project => project.featured);
  readonly otherProjects = this.projects.filter(project => !project.featured);
}
