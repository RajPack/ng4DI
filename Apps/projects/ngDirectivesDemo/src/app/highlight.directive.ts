import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {

  }
   highlight(color) {
    this.el.nativeElement.style.background = color;
   }

   @HostListener('mouseenter') onMouseEnter () {
     this.highlight('yellow');
   }
   @HostListener('mouseleave') onMouseLeave () {
      this.highlight('none');
   }
}
