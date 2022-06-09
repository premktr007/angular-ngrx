import { getCounter } from './../store/counter.selector';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<number>;
  
  // writing type for the store is required while using select() but not required for dispatch.
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
    console.log(this.counter$)
  }

}
