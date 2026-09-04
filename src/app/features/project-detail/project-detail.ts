import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslateModule, FadeInDirective],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  readonly tags = ['Swift', 'SwiftUI', 'Swift Concurrency', 'Core Data', 'SSE', 'OAuth 2.0', 'PKCE', 'Keychain', 'CryptoKit', 'Speech', 'AVFoundation', 'PDFKit', 'Git', 'XCTest'];
  readonly groups = [
    { key: 'chat', icon: '💬' }, { key: 'multimodal', icon: '📎' },
    { key: 'voice', icon: '🎙️' }, { key: 'security', icon: '🛡️' },
    { key: 'code', icon: '🧑‍💻' }, { key: 'sdk', icon: '🧩' },
  ];
}
