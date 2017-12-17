import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rootRenderNodes } from '@angular/core/src/view/util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
