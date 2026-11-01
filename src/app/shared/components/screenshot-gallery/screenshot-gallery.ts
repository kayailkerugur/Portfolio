import { Component, HostListener, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface ProjectScreenshot { src: string; alt: string; caption?: string; }

@Component({ selector: 'app-screenshot-gallery', imports: [TranslateModule], templateUrl: './screenshot-gallery.html', styleUrl: './screenshot-gallery.scss' })
export class ScreenshotGallery {
  @Input({ required: true }) screenshots: ProjectScreenshot[] = [];
  /** `phone` renders tall device captures, `poster` renders 4:5 marketing visuals. */
  @Input() variant: 'phone' | 'poster' = 'phone';
  @Input() heading = 'project_detail.screenshots_title';
  @Input() label?: string;
  @Input() intro?: string;
  @Input() galleryId = 'screenshots';

  selectedIndex: number | null = null;

  get selected(): ProjectScreenshot | null {
    return this.selectedIndex === null ? null : this.screenshots[this.selectedIndex] ?? null;
  }

  open(index: number): void { this.selectedIndex = index; }
  close(): void { this.selectedIndex = null; }
  step(delta: number): void {
    if (this.selectedIndex === null || !this.screenshots.length) return;
    const length = this.screenshots.length;
    this.selectedIndex = (this.selectedIndex + delta + length) % length;
  }

  scrollTrack(track: HTMLElement, direction: number): void {
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.selectedIndex === null) return;
    if (event.key === 'Escape') this.close();
    else if (event.key === 'ArrowRight') this.step(1);
    else if (event.key === 'ArrowLeft') this.step(-1);
  }
}
