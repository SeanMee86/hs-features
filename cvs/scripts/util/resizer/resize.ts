'use strict';
class ResizeItem {
  originalSize: string;
  newSize: string;

  constructor(public reference: HTMLElement) {
    this.newSize = '';
    this.originalSize = window
      .getComputedStyle(this.reference, null)
      .getPropertyValue('font-size');
  }
}

export class Resizer {
  textElements: ResizeItem[];

  constructor() {
    this.textElements = Array
      .from<HTMLElement>(
        document.querySelectorAll('a, p, li, span, div, h1, h2, h3, h4, h5, h6, input')
      ).map(element => new ResizeItem(element));
  }

  updateSize(sizeIncrementer: number): void {
    this.textElements.forEach(el => {
      el.newSize = (+el.originalSize.split('px')[0] * sizeIncrementer) + 'px';
      el.reference.style.fontSize = el.newSize;
    })
  }
}
