import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './presentation/icon-button/icon-button.component';
import { AboutComponent } from './containers/about/about.component';
import { MatIconModule, MatButtonModule, MatIcon, MatCardModule } from '@angular/material';
import { ResumeComponent } from './containers/resume/resume.component';
import { ContactFormComponent } from './containers/contact-form/contact-form.component';
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatCardModule, PdfViewerModule
  ],
  declarations: [AboutComponent, IconButtonComponent, ResumeComponent, ContactFormComponent, PortfolioComponent, NavbarComponent],
  exports: [
    AboutComponent, MatCardModule
  ]
})
export class MyCommonModule { }
