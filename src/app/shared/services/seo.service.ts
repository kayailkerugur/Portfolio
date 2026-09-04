import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly translate = inject(TranslateService);
  private initialized = false;

  init(): void {
    if (this.initialized) return;
    this.initialized = true;
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.update());
    this.translate.onLangChange.subscribe(() => this.update());
    this.update();
  }

  private update(): void {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;
    const key = route.data['seoKey'] as string | undefined;
    if (!key) return;

    const title = this.translate.instant(`seo.${key}.title`);
    const description = this.translate.instant(`seo.${key}.description`);
    const language = this.translate.currentLang === 'en' ? 'en' : 'tr';
    const canonical = new URL(this.router.url.split('?')[0], this.document.location.origin).href;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:locale', content: language === 'tr' ? 'tr_TR' : 'en_US' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.document.documentElement.lang = language;

    const link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    link?.setAttribute('href', canonical);
  }
}
