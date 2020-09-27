'use strict';
class ResizeItem {
    constructor(reference) {
        this.reference = reference;
        this.newSize = '';
        this.originalSize = window
            .getComputedStyle(this.reference, null)
            .getPropertyValue('font-size');
    }
}
export class Resizer {
    constructor() {
        this.textElements = Array
            .from(document.querySelectorAll('a, p, li, span, div, h1, h2, h3, h4, h5, h6, input')).map(element => new ResizeItem(element));
    }
    updateSize(sizeIncrementer) {
        this.textElements.forEach(el => {
            el.newSize = (+el.originalSize.split('px')[0] * sizeIncrementer) + 'px';
            el.reference.style.fontSize = el.newSize;
        });
    }
}
