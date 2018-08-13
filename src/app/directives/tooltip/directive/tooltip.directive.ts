import {  Directive, OnDestroy, Input, HostListener, ElementRef,
          ComponentRef, Injector, ComponentFactoryResolver,
          ApplicationRef, EmbeddedViewRef, Renderer2 } from '@angular/core';
import { TooltipComponent } from '../components/tooltip.component';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input('tooltip') content: string;
  @Input('tooltipColor') tooltipColor: string;

  private componentRef: ComponentRef<TooltipComponent>;

  constructor(private element: ElementRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  mouseenter() {
    // 1. Create a component reference from the component
    this.componentRef = this.resolver
      .resolveComponentFactory(TooltipComponent)
      .create(this.injector);

    this.componentRef.instance.hostBoundaries = this.element.nativeElement.getBoundingClientRect();
    this.componentRef.instance.content = this.content;

    if (this.tooltipColor) {
      this.componentRef.instance.color = this.tooltipColor;
      this.renderer.setStyle(this.element.nativeElement, 'color', this.tooltipColor);
    }

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
  }

  @HostListener('mouseout')
  mouseout() {
    if (this.tooltipColor) {
      this.renderer.removeStyle(this.element.nativeElement, 'color');
    }
    this.destroy();
  }

  destroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  ngOnDestroy() {
    this.destroy();
  }
}
