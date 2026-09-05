import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface ProjectScreenshot { src: string; alt: string; caption?: string; }

@Component({ selector: 'app-screenshot-gallery', imports: [TranslateModule], templateUrl: './screenshot-gallery.html', styleUrl: './screenshot-gallery.scss' })
export class ScreenshotGallery {
  @Input({ required: true }) screenshots: ProjectScreenshot[] = [];
  selected: ProjectScreenshot | null = null;
}
