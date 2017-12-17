import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './presentation/icon-button/icon-button.component';
import { AboutComponent } from './containers/about/about.component';
import { MatIconModule, MatButtonModule, MatIcon } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule
  ],
  declarations: [IconButtonComponent, AboutComponent],
  exports: [
    IconButtonComponent
  ]
})
export class MyCommonModule { }
