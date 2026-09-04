import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { ThemeService } from './shared/services/theme.service';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [`
    main { min-height: 100dvh; }
  `],
})
export class App implements OnInit {
  private translate = inject(TranslateService);
  private theme = inject(ThemeService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.translate.addLangs(['tr', 'en']);
    this.translate.setDefaultLang('tr');
    const saved = localStorage.getItem('lang');
    const language = saved === 'en' ? 'en' : 'tr';
    this.translate.use(language);
    document.documentElement.lang = language;
    this.theme.init();
    this.seo.init();
  }
}
