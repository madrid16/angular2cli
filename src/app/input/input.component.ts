import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'input-component',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css']
})

export class InputComponent{
  @Input() voto: String;

  @Output() addVoto = new EventEmitter<String>();

  constructor(){
    console.log("estoy entrando");
  }

  votar():void{
    this.addVoto.emit(this.voto);
  }
}
