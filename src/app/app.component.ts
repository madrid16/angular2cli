import {Component, NgZone} from '@angular/core';
import {InputComponent} from "./input/input.component";
import {TicketService} from "./services/ticket.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {INCREMENT, DECREMENT, RESET} from "./services/counter";
import {Router} from "@angular/router";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";

interface AppState{
  counter: number;
}

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';
  tickets: any;

  ticketMongo: any;
  errorMessage: any;

  myForm: FormGroup;

  counter: Observable<number>;
  ticketFirebase: any;

  constructor(private ticketService: TicketService,
              private fb: FormBuilder,
              private store: Store<AppState>,
              private _ngZone:NgZone,
              private router:Router,
              private af: AngularFire,
  ){

    this.ticketService.getTicketsMongo()
      .then(
        ticket => this.ticketMongo = ticket,
        error => this.errorMessage = <any>error
      );

    this.ticketFirebase = af.database.list('/ticket');
    // this.ticketFirebase.push(
    //   {'id': 1, 'titulo': 'printer not working', 'estado': 'in progress'}
    // );
    // this.ticketFirebase.push(
    //   {'id': 2, 'titulo': 'computer not working', 'estado': 'finish'}
    // );
    // this.ticketFirebase.push(
    //   {'id': 3, 'titulo': 'cellphone not working', 'estado': 'in progress'}
    // );
    // this.ticketFirebase.push(
    //   {'id': 4, 'titulo': 'light not working', 'estado': 'really'}
    // );

    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
    this.counter = store.select('counter');
    this.tickets = ticketService.getTickets();
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

  increment(){
    this.store.dispatch({type: INCREMENT});
  }

  decrement(){
    this.store.dispatch({type: DECREMENT});
  }

  reset(){
    this.store.dispatch({type: RESET});
  }

  progress: number = 0;
  label:string;

  processOutsideOfAngularZone(){
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(
      () => {console.log('finally withoyt NgZone');
    });
  }

  processWithinAngularZone(){
    this.label = 'inside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(()=>{
        this._ngZone.run(() => {console.log("finally with ngzone")});
      });
    });
  }

  _increaseProgress(doneCallBack: () => void){
    this.progress += 1;
    console.log(`Progress: ${this.progress}%`);
    if(this.progress<100){
      window.setTimeout(() => {
        this._increaseProgress(doneCallBack);
      }, 10);
    }else{
      doneCallBack();
    }
  }

  verMongoTicket(id:number):void{
    this.router.navigate(['/ticket', id]);
  }

  verTicket(id:number):void{
    this.router.navigate(['/ticket', id]);
  }

  updateTicket(key):void{
    console.log(key);
    this.ticketFirebase.update(key, {estado: 'in progress'});
  }

  removeTicket(key):void{
    console.log(key);
    this.ticketFirebase.remove(key);
  }

  removeAllTicket():void{
    this.ticketFirebase.remove();
  }

}
