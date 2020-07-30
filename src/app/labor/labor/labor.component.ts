import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/tab.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.css']
})
export class LaborComponent implements OnInit {
  tabs = [];
  activeTabUrl;
constructor(private tabService: TabService, private router: Router) {}

  ngOnInit() {
    this.tabs = this.tabService.tabs;
    this.tabs = this.tabService.getTabOptionByUrl('labor')
    console.log(this.tabs)

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeTabUrl = event.urlAfterRedirects;
      }
    });
  }

  
  openTab(url: string) {
    this.router.navigateByUrl(url);
  }
  onTabChange(event) {
    this.router.navigateByUrl(event.nextId);
  }

}
