import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

export interface Skill { name: string; icon?: string; customIcon?: string; }
export interface SkillGroup { category: string; emoji: string; essential: boolean; skills: Skill[]; }

@Component({ selector: 'app-skills', imports: [TranslateModule, FadeInDirective], templateUrl: './skills.html', styleUrl: './skills.scss' })
export class Skills {
  readonly groups: SkillGroup[] = [
    { category: 'skills.categories.core', emoji: '⭐', essential: true, skills: [
      { name: 'Swift', icon: 'devicon-swift-plain' }, { name: 'SwiftUI', icon: 'devicon-swift-plain' }, { name: 'UIKit', icon: 'devicon-apple-original' }, { name: 'Java', icon: 'devicon-java-plain' }, { name: 'Spring Boot', icon: 'devicon-spring-plain' }, { name: 'Node.js', icon: 'devicon-nodejs-plain' }, { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    ] },
    { category: 'skills.categories.mobile', emoji: '📱', essential: true, skills: [
      { name: 'CoreData', icon: 'devicon-apple-original' }, { name: 'Realm', icon: 'devicon-realm-original' }, { name: 'MapKit', customIcon: '🗺️' }, { name: 'MVVM / MVC', customIcon: '🏗️' }, { name: 'macOS', icon: 'devicon-apple-original' }, { name: 'AppKit', icon: 'devicon-apple-original' }, { name: 'XCTest', customIcon: '✅' }, { name: 'Swift Package Manager', customIcon: '📦' },
    ] },
    { category: 'skills.categories.backend_systems', emoji: '⚙️', essential: true, skills: [
      { name: 'Express.js', icon: 'devicon-express-original' }, { name: 'REST API', customIcon: '🔗' }, { name: 'Socket.IO', icon: 'devicon-socketio-original' }, { name: 'Redis', icon: 'devicon-redis-plain' }, { name: 'Elasticsearch', icon: 'devicon-elasticsearch-plain' }, { name: 'Docker', icon: 'devicon-docker-plain' }, { name: 'Liquibase', customIcon: '🔄' }, { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
    ] },
    { category: 'skills.categories.security', emoji: '🔐', essential: true, skills: [
      { name: 'JWT', customIcon: '🛡️' }, { name: 'OAuth 2.0 / PKCE', customIcon: '🔐' }, { name: 'AES-GCM', customIcon: '🔒' }, { name: 'ECDH', customIcon: '🔑' }, { name: 'TLS / HTTPS', customIcon: '🌐' }, { name: 'Spring Security', icon: 'devicon-spring-plain' }, { name: 'Keychain Services', customIcon: '🗝️' }, { name: 'CryptoKit', customIcon: '🧪' },
    ] },
    { category: 'skills.categories.ai_multimodal', emoji: '🤖', essential: false, skills: [
      { name: 'OpenAI-compatible APIs', customIcon: '✨' }, { name: 'Gemini', customIcon: '💫' }, { name: 'Ollama', customIcon: '🦙' }, { name: 'Server-Sent Events', customIcon: '⚡' }, { name: 'Multimodal AI', customIcon: '🖼️' }, { name: 'Speech Framework', customIcon: '🎙️' }, { name: 'AVFoundation', customIcon: '🔊' }, { name: 'PDFKit', customIcon: '📄' },
    ] },
    { category: 'skills.categories.additional', emoji: '🛠️', essential: false, skills: [
      { name: 'Angular', icon: 'devicon-angular-plain' }, { name: 'TypeScript', icon: 'devicon-typescript-plain' }, { name: 'JavaScript', icon: 'devicon-javascript-plain' }, { name: 'HTML5', icon: 'devicon-html5-plain' }, { name: 'SCSS', icon: 'devicon-sass-plain' }, { name: 'RxJS', icon: 'devicon-rxjs-plain' }, { name: 'Git', icon: 'devicon-git-plain' }, { name: 'Xcode', icon: 'devicon-xcode-plain' }, { name: 'Figma', icon: 'devicon-figma-plain' }, { name: 'MapStruct', customIcon: '🗺️' }, { name: 'Lombok', customIcon: '☕' }, { name: 'Thymeleaf', customIcon: '🌿' }, { name: 'swift-cgit2', customIcon: '🔀' },
    ] },
  ];
}
