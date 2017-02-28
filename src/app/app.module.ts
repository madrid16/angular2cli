import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InputComponent} from "./input/input.component";
import {ConversorPipe} from "./pipes/conversor.pipe";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
