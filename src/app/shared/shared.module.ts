import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipComponent} from './directives/tooltip/components/tooltip.component';
import {TooltipDirective} from './directives/tooltip/directive/tooltip.directive';
import {OpenDetailBlockDirective} from './directives/tooltip/directive/open-detail-block.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {SafePipe} from './pipes/safe.directive';



@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective,
    OpenDetailBlockDirective,
    OrderByPipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    TooltipComponent
  ],
  exports: [
    TooltipComponent,
    TooltipDirective,
    OpenDetailBlockDirective,
    OrderByPipe,
    SafePipe
  ]
})
export class SharedModule { }
