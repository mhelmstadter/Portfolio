import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private router:Router;

  constructor(router:Router) {
    this.router = router;
   }

  ngOnInit() {
  }

  openAbout(event) {
    this.router.navigateByUrl('/about-madeline');
  }

  openResume(event) {
    this.router.navigateByUrl('/resume');
  }

  openPortfolio(event) {
    this.router.navigateByUrl('/portfolio');
  }

  openContactForm(event) {
    this.router.navigateByUrl('/contact-madeline');
  }

}
