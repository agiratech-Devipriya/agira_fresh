import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {



  constructor(private router: Router) {}
navigateToPeople() {
  this.router.navigate(['/card1'])
}

navigateToArticle() {
  this.router.navigate(['/article1'])
}

navigateToEBook() {
  this.router.navigate(['/e-book1'])
}
navigateToPodcast() {
  this.router.navigate(['/podcast1'])
}



handleMenuClick(menuItem: string) {
 
  console.log("Menu item clicked:", menuItem);
}

}
