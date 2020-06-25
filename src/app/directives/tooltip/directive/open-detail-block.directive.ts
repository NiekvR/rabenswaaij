import { Directive, Input, HostListener, ElementRef, Renderer2, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[openDetailBlockDirective]'
})
export class OpenDetailBlockDirective implements AfterViewInit, OnChanges {
  private arrowElement: Element;
  private _focus: boolean = false;

  @Input('color') color: string;
  @Input('changedFocus') changedFocus = false

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if(!!changes.changedFocus && !!changes.changedFocus.previousValue) {
      this.focus = false;
      this.resetArrow();
    }
  }


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
    if (!this.focus) {
      this.renderer.removeStyle(this.element.nativeElement, 'color');
    }
  }

  @HostListener('click')
  click() {
    if (this.focus) {
      this.focus = false;
      this.resetArrow();
    } else {
      this.focus = true;
      this.rotateArrow();
    }
  }

  private resetArrow() {
    this.renderer.removeStyle(this.element.nativeElement, 'color');
    this.renderer.removeStyle(this.arrowElement, 'transform');
  }

  private rotateArrow() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.arrowElement, 'transform', 'rotate(180deg)');
  }
}
