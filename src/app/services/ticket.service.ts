import {Injectable} from "@angular/core";
import {TICKETS} from "./mocks/tickets.mock";
import {tick} from "@angular/core/testing";

@Injectable()
export class TicketService{

  miVariableTicketGlobal = "i am global var";

  getTickets(){
    return TICKETS;
  }

  getVariableGlobal():string{
    return this.miVariableTicketGlobal;
  }

  getTicket(id:number){
    let ticket = TICKETS.find(x => x.id == id);
    return ticket;
  }
}
