import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';
import { ProjectScreenshot, ScreenshotGallery } from '../../shared/components/screenshot-gallery/screenshot-gallery';

interface Metric { value: string; label: string; }
interface CaseStudy {
  key: string; title: string; emoji: string; tags: string[]; repoUrl?: string; appStoreUrl?: string;
  screenshots: ProjectScreenshot[]; promos?: ProjectScreenshot[]; heroImage?: string;
  groups: { key: string; icon: string }[]; architecture?: boolean; metrics?: Metric[]; highlights?: string[]; cta?: boolean;
}

const TM = '/projects/tripmate/';
const tmScreen = (name: string): ProjectScreenshot => ({ src: `${TM}screen-${name}.webp`, alt: `case_studies.tripmate.screens.${name}.alt`, caption: `case_studies.tripmate.screens.${name}.caption` });
const tmPromo = (name: string): ProjectScreenshot => ({ src: `${TM}promo-${name}.webp`, alt: `case_studies.tripmate.promos.${name}`, caption: `case_studies.tripmate.promos.${name}` });

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslateModule, FadeInDirective, ScreenshotGallery],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly slug = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? 'aichat';
  private readonly studies: Record<string, CaseStudy> = {
    aichat: { key: 'aichat', title: 'AIChat', emoji: '🤖', repoUrl: 'https://github.com/kayailkerugur/AIChat', screenshots: [], tags: ['Swift', 'SwiftUI', 'Swift Concurrency', 'Core Data', 'SSE', 'OAuth 2.0', 'PKCE', 'Keychain', 'CryptoKit', 'Speech', 'AVFoundation', 'PDFKit', 'Git', 'XCTest'], groups: [{ key: 'chat', icon: '💬' }, { key: 'multimodal', icon: '📎' }, { key: 'voice', icon: '🎙️' }, { key: 'security', icon: '🛡️' }, { key: 'code', icon: '🧑‍💻' }, { key: 'sdk', icon: '🧩' }], architecture: true, metrics: [{ value: '124', label: 'project_detail.metrics.tests' }, { value: '5+', label: 'project_detail.metrics.providers' }, { value: '2', label: 'project_detail.metrics.modes' }] },
    notiva: { key: 'notiva', title: 'Notiva', emoji: '📒', appStoreUrl: 'https://apps.apple.com/tr/app/notiva-notes-tasks-focus/id6450840399', screenshots: [], tags: ['SwiftUI', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'Redis', 'Liquibase'], groups: [{ key: 'organization', icon: '📝' }, { key: 'sync', icon: '☁️' }, { key: 'security', icon: '🛡️' }] },
    tripmate: {
      key: 'tripmate', title: 'TripMate', emoji: '✈️', appStoreUrl: 'https://apps.apple.com/tr/app/tripmate/id6761005038', heroImage: `${TM}cover.webp`, cta: true,
      tags: ['SwiftUI', 'SwiftData', 'MapKit', 'CoreLocation', 'WidgetKit', 'EventKit', 'UserNotifications', 'Sign in with Apple', 'Google Sign-In', 'PDFKit', 'Spring Boot', 'REST API'],
      highlights: ['case_studies.tripmate.highlights.0', 'case_studies.tripmate.highlights.1', 'case_studies.tripmate.highlights.2'],
      screenshots: ['today', 'trips', 'explore', 'trip-detail', 'day-plan'].map(tmScreen),
      promos: ['meet-tripmate', 'every-trip-one-place', 'next-trip-in-minutes', 'every-detail', 'your-day', 'real-travelers', 'plan-together', 'ready-before-you-go', 'whole-journey', 'next-story'].map(tmPromo),
      groups: [{ key: 'planning', icon: '🗓️' }, { key: 'location', icon: '🗺️' }, { key: 'together', icon: '🤝' }, { key: 'tools', icon: '🧳' }, { key: 'memories', icon: '📸' }, { key: 'platform', icon: '📱' }],
      metrics: [{ value: '2.0', label: 'case_studies.tripmate.metrics.version' }, { value: '4', label: 'case_studies.tripmate.metrics.languages' }, { value: '15+', label: 'case_studies.tripmate.metrics.tools' }, { value: '39K+', label: 'case_studies.tripmate.metrics.lines' }],
    },
    chat: { key: 'chat', title: 'Real-Time Chat', emoji: '💬', screenshots: [], tags: ['Node.js', 'Express.js', 'Socket.IO', 'PostgreSQL', 'JWT', 'AES-GCM', 'ECDH', 'ECDSA', 'HKDF'], groups: [{ key: 'realtime', icon: '⚡' }, { key: 'security', icon: '🛡️' }, { key: 'devices', icon: '📱' }] },
  };
  readonly project = this.studies[this.slug] ?? this.studies['aichat'];
}
