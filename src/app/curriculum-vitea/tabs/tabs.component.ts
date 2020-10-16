import { Component, OnInit } from '@angular/core';
import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'tern-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs: TabComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    selectedTab.active = true;
  }

}
