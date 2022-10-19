import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {

   title = 'Expense Manager';
   isUserLoggedIn = false;

   constructor(private router: Router) {
      this.router.events.subscribe((event: Event) => {
         if (event instanceof NavigationEnd) {
           if (this.router.url === '/login' || this.router.url === '/' && localStorage.getItem('isUserLoggedIn')) {
             this.router.navigate(['/admin']);
           }
         }
       });
    }
   
   ngOnInit() {
      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else


         this.isUserLoggedIn = false;
   }
}
