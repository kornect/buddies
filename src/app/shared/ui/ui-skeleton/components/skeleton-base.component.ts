import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({ template: '' })
export abstract class SkeletonBaseComponent implements AfterViewInit {
  public animate = false;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (this.animate === true) {
      // get skeleton first child
      const host = this.host.nativeElement.children[0];

      host.classList.add('animate-strike');
    }
  }
}
