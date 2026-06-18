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
  readonly jobs = ['aselsan', 'enqura', 'detaysoft'] as const;
  readonly eduKeys = ['cs', 'ee'] as const;
}
