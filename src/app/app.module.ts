import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ MainComponent ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }