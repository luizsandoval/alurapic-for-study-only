import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
 
  @Input()
  value: string = '';
  @Output()
  onTyping = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    // Using the debounceTime we guarantee that the requisition will be done only after 300 miliseconds
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    // when the user leaves this component, the debounce Observable is unsubscribed, in order to avoid perfomance issues
    this.debounce.unsubscribe();
  }
}
