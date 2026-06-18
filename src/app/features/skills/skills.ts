import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

export interface Skill {
  name: string;
  icon?: string;
  customIcon?: string;
  level?: 'primary' | 'secondary';
}

export interface SkillGroup {
  category: string;
  emoji: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly groups: SkillGroup[] = [
    {
      category: 'skills.categories.languages',
      emoji: '💻',
      skills: [
        { name: 'Swift',      icon: 'devicon-swift-plain',            level: 'primary' },
        { name: 'Java',       icon: 'devicon-java-plain',             level: 'primary' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain',       level: 'primary' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain',       level: 'primary' },
        { name: 'SQL',        icon: 'devicon-azuresqldatabase-plain', level: 'secondary' },
      ],
    },
    {
      category: 'skills.categories.mobile',
      emoji: '📱',
      skills: [
        { name: 'SwiftUI',    icon: 'devicon-swift-plain',    level: 'primary' },
        { name: 'UIKit',      icon: 'devicon-apple-original', level: 'primary' },
        { name: 'CoreData',   icon: 'devicon-apple-original', level: 'secondary' },
        { name: 'Realm',      icon: 'devicon-realm-original', level: 'secondary' },
        { name: 'MapKit',     customIcon: '🗺️',               level: 'secondary' },
        { name: 'MVVM / MVC', customIcon: '🏗️',              level: 'secondary' },
      ],
    },
    {
      category: 'skills.categories.frontend',
      emoji: '🎨',
      skills: [
        { name: 'Angular', icon: 'devicon-angular-plain', level: 'primary' },
        { name: 'HTML5',   icon: 'devicon-html5-plain',   level: 'primary' },
        { name: 'SCSS',    icon: 'devicon-sass-plain',    level: 'primary' },
        { name: 'RxJS',    icon: 'devicon-rxjs-plain',    level: 'secondary' },
      ],
    },
    {
      category: 'skills.categories.backend',
      emoji: '⚙️',
      skills: [
        { name: 'Spring Boot', icon: 'devicon-spring-plain',      level: 'primary' },
        { name: 'Node.js',     icon: 'devicon-nodejs-plain',      level: 'primary' },
        { name: 'Express.js',  icon: 'devicon-express-original',  level: 'primary' },
        { name: 'Socket.IO',   icon: 'devicon-socketio-original', level: 'secondary' },
        { name: 'REST API',    customIcon: '🔗',                  level: 'secondary' },
      ],
    },
    {
      category: 'skills.categories.database_devops',
      emoji: '🗄️',
      skills: [
        { name: 'PostgreSQL',    icon: 'devicon-postgresql-plain',    level: 'primary' },
        { name: 'Redis',         icon: 'devicon-redis-plain',         level: 'primary' },
        { name: 'Docker',        icon: 'devicon-docker-plain',        level: 'primary' },
        { name: 'Elasticsearch', icon: 'devicon-elasticsearch-plain', level: 'secondary' },
        { name: 'Liquibase',     customIcon: '🔄',                    level: 'secondary' },
      ],
    },
    {
      category: 'skills.categories.security',
      emoji: '🔐',
      skills: [
        { name: 'JWT',             customIcon: '🛡️', level: 'primary' },
        { name: 'AES-GCM',         customIcon: '🔒', level: 'primary' },
        { name: 'ECDH',            customIcon: '🔑', level: 'secondary' },
        { name: 'TLS/HTTPS',       customIcon: '🌐', level: 'secondary' },
        { name: 'Spring Security', icon: 'devicon-spring-plain', level: 'secondary' },
      ],
    },
    {
      category: 'skills.categories.tools',
      emoji: '🛠️',
      skills: [
        { name: 'Git',       icon: 'devicon-git-plain',    level: 'primary' },
        { name: 'Xcode',     icon: 'devicon-xcode-plain',  level: 'primary' },
        { name: 'Figma',     icon: 'devicon-figma-plain',  level: 'secondary' },
        { name: 'MapStruct', customIcon: '🗺️',             level: 'secondary' },
        { name: 'Lombok',    customIcon: '☕',             level: 'secondary' },
        { name: 'Thymeleaf', customIcon: '🌿',             level: 'secondary' },
      ],
    },
  ];
}
