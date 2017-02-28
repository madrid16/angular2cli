import {Injectable} from "@angular/core";
import {TICKETS} from "./mocks/tickets.mock";

@Injectable()
export class TicketService{

  miVariableTicketGlobal = "i am global var";

  getTicket(){
    return TICKETS;
  }

  getVariableGlobal():string{
    return this.miVariableTicketGlobal;
  }
}
