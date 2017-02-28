import {Directive, ElementRef} from "@angular/core";

@Directive({ selector: '[gigant]'})

export class GigantDirective{

  constructor(el: ElementRef){
    el.nativeElement.style.fontSize = '50px';
  }

}
