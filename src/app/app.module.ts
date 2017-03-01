import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InputComponent} from "./input/input.component";
import {ConversorPipe} from "./pipes/conversor.pipe";
import {HighlightDirective} from "./directives/highlight.directive";
import {GigantDirective} from "./directives/gigant.directive";
import {TicketService} from "./services/ticket.service";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./services/counter";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    HighlightDirective,
    GigantDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer})
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
