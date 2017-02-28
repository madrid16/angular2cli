import { Component } from '@angular/core';
import {InputComponent} from "./input/input.component";
import {TicketService} from "./services/ticket.service";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';
  tickets: any;

  myForm: FormGroup;

  constructor(private ticketService: TicketService, private fb: FormBuilder){
    this.tickets = ticketService.getTicket();
    this.myForm = fb.group({
      'name': ['Edgar']
    });
  }

  votos = [
    {title: 'opcion 1'},
    {title: 'opcion 2'},
    {title: 'opcion 3'},
    {title: 'opcion 4'}
  ];

  addVoto(response:string){
    this.votacion = "You Choose: " + response;
  }

  count = 5;
  factor = 1;

  onSubmit(value:string):void{
    console.log("this form contain ", value);
  }
}
