import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MyCommonModule } from '../app/common/common.module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../app/common/containers/about/about.component';
import { AppComponent } from './app.component';
import { ResumeComponent } from './common/containers/resume/resume.component';
import { PortfolioComponent } from './common/containers/portfolio/portfolio.component';
import { ContactFormComponent } from './common/containers/contact-form/contact-form.component';

const routes:Routes = [ 
  {path: '', redirectTo: 'about-madeline', pathMatch: 'full'},
  {path: 'about-madeline', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact-madeline', component: ContactFormComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MyCommonModule, RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
