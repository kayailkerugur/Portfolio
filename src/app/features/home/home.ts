import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FeaturedProject } from './featured-project/featured-project';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslateModule, FeaturedProject],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
