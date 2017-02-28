import { Component } from '@angular/core';
import {InputComponent} from "./input/input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';

  votos = [
    {title: 'opcion 1'},
    {title: 'opcion 2'},
    {title: 'opcion 3'},
    {title: 'opcion 4'}
  ]

  addVoto(response:string){
    this.votacion = "You Choose: " + response;
  }
}
