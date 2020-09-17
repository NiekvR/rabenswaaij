import { Directive, Input, HostListener, ElementRef, Renderer2, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appOpenDetailBlockDirective]'
})
export class OpenDetailBlockDirective implements AfterViewInit, OnChanges {
  private arrowElement: Element;

  @Input() color: string;
  @Input() changedFocus = false;
  @Input() focus = false;

  private rotating = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.changedFocus && !!changes.changedFocus.previousValue) {
      this.resetArrow();
    }
  }


  ngAfterViewInit() {
    this.arrowElement = this.element.nativeElement.querySelector('i');
  }

  @HostListener('mouseenter')
  public mouseenter() {
    if (!this.focus) {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    }
  }

  @HostListener('mouseout')
  public mouseout() {
    if (!this.focus) {
      this.renderer.removeStyle(this.element.nativeElement, 'color');
    }
  }

  @HostListener('click')
  public click() {
    if (this.focus) {
      this.resetArrow();
    } else {
      this.focus = true;
      this.rotateArrow();
    }
  }

  private resetArrow() {
    if (!this.rotating) {
      this.focus = false;
      this.renderer.removeStyle(this.element.nativeElement, 'color');
      this.renderer.removeStyle(this.arrowElement, 'transform');
    }
  }

  private rotateArrow() {
    this.rotating = true;
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.arrowElement, 'transform', 'rotate(180deg)');
    setTimeout(() => {
      this.rotating = false;
    }, 1000);
  }
}
