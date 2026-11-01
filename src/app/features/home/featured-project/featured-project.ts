import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-featured-project',
  imports: [RouterLink, TranslateModule, FadeInDirective],
  templateUrl: './featured-project.html',
  styleUrl: './featured-project.scss',
})
export class FeaturedProject {
  readonly appStoreUrl = 'https://apps.apple.com/tr/app/tripmate/id6761005038';
  readonly highlights = [0, 1, 2].map(i => `case_studies.tripmate.highlights.${i}`);
  readonly screens = ['today', 'explore', 'day-plan'];
}
