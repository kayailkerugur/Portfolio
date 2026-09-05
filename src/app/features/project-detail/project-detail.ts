import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';
import { ProjectScreenshot, ScreenshotGallery } from '../../shared/components/screenshot-gallery/screenshot-gallery';

interface CaseStudy { key: string; title: string; emoji: string; tags: string[]; repoUrl?: string; appStoreUrl?: string; screenshots: ProjectScreenshot[]; groups: { key: string; icon: string }[]; architecture?: boolean; metrics?: boolean; }

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslateModule, FadeInDirective, ScreenshotGallery],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly slug = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? 'aichat';
  private readonly studies: Record<string, CaseStudy> = {
    aichat: { key: 'aichat', title: 'AIChat', emoji: '🤖', repoUrl: 'https://github.com/kayailkerugur/AIChat', screenshots: [], tags: ['Swift', 'SwiftUI', 'Swift Concurrency', 'Core Data', 'SSE', 'OAuth 2.0', 'PKCE', 'Keychain', 'CryptoKit', 'Speech', 'AVFoundation', 'PDFKit', 'Git', 'XCTest'], groups: [{ key: 'chat', icon: '💬' }, { key: 'multimodal', icon: '📎' }, { key: 'voice', icon: '🎙️' }, { key: 'security', icon: '🛡️' }, { key: 'code', icon: '🧑‍💻' }, { key: 'sdk', icon: '🧩' }], architecture: true, metrics: true },
    notiva: { key: 'notiva', title: 'Notiva', emoji: '📒', appStoreUrl: 'https://apps.apple.com/tr/app/notiva-notes-tasks-focus/id6450840399', screenshots: [], tags: ['SwiftUI', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'Redis', 'Liquibase'], groups: [{ key: 'organization', icon: '📝' }, { key: 'sync', icon: '☁️' }, { key: 'security', icon: '🛡️' }] },
    tripmate: { key: 'tripmate', title: 'TripMate', emoji: '✈️', appStoreUrl: 'https://apps.apple.com/tr/app/tripmate/id6761005038', screenshots: [], tags: ['SwiftUI', 'MapKit', 'CoreLocation', 'REST API'], groups: [{ key: 'planning', icon: '🗓️' }, { key: 'location', icon: '🗺️' }] },
    chat: { key: 'chat', title: 'Real-Time Chat', emoji: '💬', screenshots: [], tags: ['Node.js', 'Express.js', 'Socket.IO', 'PostgreSQL', 'JWT', 'AES-GCM', 'ECDH', 'ECDSA', 'HKDF'], groups: [{ key: 'realtime', icon: '⚡' }, { key: 'security', icon: '🛡️' }, { key: 'devices', icon: '📱' }] },
  };
  readonly project = this.studies[this.slug] ?? this.studies['aichat'];
}
