import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addNumber, changeName } from './store/counter.actions';
import { getName } from './store/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  customNumber: number;
  name$: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.name$ = this.store.select(getName)
  }

  // dispatch with payload
  addNumber() {
    this.store.dispatch(addNumber({number: this.customNumber}));
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }
}
