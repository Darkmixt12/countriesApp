import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
  
})
export class SearchBoxComponent {

  @Output()
  onValue = new EventEmitter();
  
  @Input()
  public placeholder: string = ""


  sendvalue(){}
}
