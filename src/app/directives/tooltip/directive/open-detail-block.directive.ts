import {Directive, Input, HostListener, ElementRef, Renderer2, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[openDetailBlockDirective]'
})
export class OpenDetailBlockDirective implements AfterViewInit{
  private arrowElement: Element;
  private focus: boolean = false;

  @Input('color') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.arrowElement = this.element.nativeElement.querySelector('i');
    console.log(this.arrowElement);
  }

  @HostListener('mouseenter')
  mouseenter() {
    if(!this.focus) {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    }
  }

  @HostListener('mouseout')
  mouseout() {
    if (!this.focus) {
      this.renderer.removeStyle(this.element.nativeElement, 'color');
    }
  }

  @HostListener('click')
  click() {
    console.log('fire');
    if (this.focus) {
      this.focus = false;
      this.renderer.removeStyle(this.element.nativeElement, 'color');
      this.renderer.removeStyle(this.arrowElement, 'transform');
    } else {
      this.focus = true;
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
      this.renderer.setStyle(this.arrowElement, 'transform', 'rotate(180deg)');
    }
  }
}
