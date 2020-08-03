import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {

  private previousUrl: string;
  private currentUrl: string;
  private previousRoute: string;

  constructor(private router: Router) {
    // this.currentUrl = this.router.url;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.previousRoute = event.url;
      }
    });

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     this.previousRoute = event.url;
    //   }
    //   // if (event instanceof NavigationEnd) {
    //   //   this.previousUrl = this.currentUrl;
    //   //   this.currentUrl = event.url;
    //   // }
    // });
  }

  public getPreviousUrl(): string {
    // return this.previousUrl;
    return this.previousRoute;
  }
}
