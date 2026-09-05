import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-about',
  imports: [TranslateModule, FadeInDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly jobs = ['enqura_mac', 'aselsan', 'enqura_ios', 'detaysoft'] as const;
  readonly education = [
    { key: 'ms', showSchool: false },
    { key: 'cs', showSchool: true },
    { key: 'ee', showSchool: true },
  ] as const;
}
