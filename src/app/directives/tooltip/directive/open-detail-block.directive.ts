import {Directive, Input, HostListener, ElementRef, Renderer2, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[openDetailBlockDirective]'
})
export class OpenDetailBlockDirective implements AfterViewInit{
  private arrowElement: Element;
  private _focus: boolean = false;

  @Input('color') color: string;
  @Input()
  set focus(focus: boolean) {
    if(focus != this._focus) {
      this._focus = focus;
      this.animateArrow();
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.arrowElement = this.element.nativeElement.querySelector('i');
  }

  @HostListener('mouseenter')
  mouseenter() {
    if(!this._focus) {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    }
  }

  @HostListener('mouseout')
  mouseout() {
    if (!this._focus) {
      this.renderer.removeStyle(this.element.nativeElement, 'color');
    }
  }

  animateArrow() {
    if (this._focus) {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
      this.renderer.setStyle(this.arrowElement, 'transform', 'rotate(180deg)');
    } else {
      this.renderer.removeStyle(this.element.nativeElement, 'color');
      this.renderer.removeStyle(this.arrowElement, 'transform');
    }
  }
}
