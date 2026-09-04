import { Directive, ElementRef, OnInit, OnDestroy, inject, input } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
})
export class FadeInDirective implements OnInit, OnDestroy {
  readonly delay = input<string>('0ms', { alias: 'appFadeIn' });

  private observer!: IntersectionObserver;

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  ngOnInit(): void {
    const el = this.el.nativeElement;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      return;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s ease ${this.delay()}, transform 0.55s ease ${this.delay()}`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          this.observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
