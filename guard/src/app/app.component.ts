import { Component, OnInit, inject } from '@angular/core';
import { Router, Event } from '@angular/router';

import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'guard';
  showLoader: boolean = false;
  constructor(public router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((RouterEvent: Event) => {
      if (RouterEvent instanceof NavigationStart) {
        this.showLoader = true;
      }
      if (
        RouterEvent instanceof NavigationEnd ||
        RouterEvent instanceof NavigationCancel ||
        RouterEvent instanceof NavigationError
      ) {
        this.showLoader = false;
      }
    });
  }
}
