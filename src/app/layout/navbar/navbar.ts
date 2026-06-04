import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private translate = inject(TranslateService);

  readonly links = [
    { key: 'nav.about',    path: '/about' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.skills',   path: '/skills' },
    { key: 'nav.contact',  path: '/contact' },
  ];

  menuOpen = false;

  get currentLang(): string {
    return this.translate.currentLang ?? this.translate.defaultLang ?? 'tr';
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
