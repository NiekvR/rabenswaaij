import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from '../tabs.component';

@Component({
  selector: 'tern-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tabTitle;

  public active: boolean;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

  ngOnInit() {
  }

}
