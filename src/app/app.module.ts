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
import {RouterModule} from "@angular/router";
import {APPROUTER} from "./commons/router";
import {PageNotFoundComponent} from "./pageNotFound/page.not.found.component";
import {InitComponent} from "./init.component";
import {TicketDetail} from "./tickets/ticket.detail";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {UpdateComponent} from "./update/update.component";


export const firebaseConfig = {
  apiKey: "AIzaSyCNxDSycVPnuPBkDFaIxTSa5TNKOFTAv2Q",
  authDomain: "angular-firebase-108a0.firebaseapp.com",
  databaseURL: "https://angular-firebase-108a0.firebaseio.com",
  storageBucket: "angular-firebase-108a0.appspot.com",
  messagingSenderId: "126082551851"
};


export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    HighlightDirective,
    GigantDirective,
    PageNotFoundComponent,
    InitComponent,
    TicketDetail,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer}),
    RouterModule.forRoot(APPROUTER),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }
