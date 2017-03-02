import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {TicketService} from "../services/ticket.service";

@Component({
  selector: 'ticket-detail',
  templateUrl: 'ticket.detail.html'
})

export class TicketDetail{
  ticket:any;
  errorMessage:string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TicketService
  ){

  }

  // ngOnInit(){
  //     let id = +this.route.snapshot.params['id'];
  //     this.ticket = this.service.getTicket(id);
  // }

  ngOnInit(){
      this.service.getTicketMongo(this.route.snapshot.params['id'])
        .then(
          ticket => this.ticket = ticket,
          error => this.errorMessage = <any>error
        );
  }
}
