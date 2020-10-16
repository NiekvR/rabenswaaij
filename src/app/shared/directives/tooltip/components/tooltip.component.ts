import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: [ './tooltip.component.scss' ]
})
export class TooltipComponent implements AfterViewInit {

  public hostBoundaries: any;
  public content: string;
  public color: string;
  bottom: string;
  left: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const tooltipContainer = this.el.nativeElement.querySelector('.tooltip-container');
    const { bottom } = this.hostBoundaries;
    const { left } = this.hostBoundaries;
    const hostWidth = this.hostBoundaries.width;
    const { width } = tooltipContainer.getBoundingClientRect();
    this.renderer.setStyle(tooltipContainer, 'top', `${bottom + 5}px`);
    this.renderer.setStyle(tooltipContainer, 'left', `${left + (hostWidth / 2) - (width / 2)}px`);
    this.renderer.setStyle(tooltipContainer, 'backgroundColor', this.color);
  }

}
