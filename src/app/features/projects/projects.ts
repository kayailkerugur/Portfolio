import { Component } from '@angular/core';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      title: 'TripMate',
      subtitle: 'iOS · Backend · DevOps',
      description:
        'SwiftUI ile App Store\'da yayımlanan, Spring Boot backend, PostgreSQL, Redis ve Google Maps entegrasyonu içeren üretim ortamına hazır seyahat planlama uygulaması.',
      tags: ['SwiftUI', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Google Maps'],
      liveUrl: 'https://apps.apple.com',
    },
    {
      title: 'Auth Service',
      subtitle: 'Backend · DevOps',
      description:
        'Spring Boot ve Spring Security ile geliştirilmiş, e-posta doğrulama, JWT/refresh token, Redis tabanlı token blacklist ve Thymeleaf e-posta şablonları içeren tam kapsamlı kimlik doğrulama sistemi.',
      tags: ['Spring Boot', 'Spring Security', 'JWT', 'Redis', 'PostgreSQL', 'Docker', 'MapStruct'],
    },
    {
      title: 'Aselsan — Doküman Arama Platformu',
      subtitle: 'FullStack · DevOps',
      description:
        'Angular frontend ve Node.js/Express backend ile PDF dosyaları üzerinde Elasticsearch tabanlı full-text arama, Socket.IO ile gerçek zamanlı iletişim ve AES-GCM/ECDH ile uçtan uca şifreleme içeren kurumsal platform.',
      tags: ['Angular', 'Node.js', 'Elasticsearch', 'Socket.IO', 'AES-GCM', 'ECDH', 'Docker', 'TLS'],
    },
    {
      title: 'ilker.kaya — Portföy Sitesi',
      subtitle: 'Frontend',
      description:
        'Angular 21 ile geliştirilmiş kişisel portföy sitesi. Standalone component mimarisi, lazy loading routing ve modüler SCSS yapısı.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/kayailkerugur',
    },
  ];
}
