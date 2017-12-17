import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MyCommonModule } from '../app/common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { IconButtonComponent } from '../app/common/presentation/icon-button/icon-button.component';
import { MatIconModule } from '@angular/material';

import { AboutComponent } from '../app/common/containers/about/about.component'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, AboutComponent, IconButtonComponent
  ],
  imports: [
    BrowserModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
