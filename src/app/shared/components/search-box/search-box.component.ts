import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
  
  
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>(); 
  private debouncerSuscription?: Subscription

  @Input()
  public initialValue: string = '';

  @Output()
  onValue : EventEmitter<string> = new EventEmitter();
  
  @Input()
  public placeholder: string = ""

  @Output()
  public onDebounce = new EventEmitter<string>();

  sendvalue(value: string){
  this.onValue.emit(value)
}

  onkeypress(searchTerm: string){
    this.debouncer.next(searchTerm)
  }

  
  ngOnInit(){
    this.debouncerSuscription =this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe( value => {
      //console.log('debouncer value', value)
      this.onDebounce.emit(value)
    } )
  }

  ngOnDestroy(){
    this.debouncerSuscription?.unsubscribe()
  }

}
