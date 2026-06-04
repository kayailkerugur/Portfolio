import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly groups: SkillGroup[] = [
    {
      category: 'Diller',
      items: ['Swift', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      category: 'Mobil',
      items: ['SwiftUI', 'UIKit', 'CoreData', 'Realm', 'MVVM', 'MVC'],
    },
    {
      category: 'Frontend',
      items: ['Angular', 'HTML', 'SCSS'],
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'Node.js', 'Express.js', 'REST API', 'WebSocket'],
    },
    {
      category: 'DevOps & Altyapı',
      items: ['Docker', 'PostgreSQL', 'Redis', 'Liquibase', 'Elasticsearch'],
    },
    {
      category: 'Güvenlik',
      items: ['JWT', 'AES-GCM', 'ECDH', 'TLS/HTTPS', 'Spring Security'],
    },
    {
      category: 'Araçlar',
      items: ['Git', 'MapStruct', 'Lombok', 'Thymeleaf', 'Socket.IO'],
    },
  ];
}
