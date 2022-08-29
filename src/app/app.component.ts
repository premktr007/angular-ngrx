import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { getLoadingState, getErrorMsg } from './shared/store/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx';
  showLoading$: Observable<boolean>;
  showErrorMsg$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(){
    this.showLoading$ = this.store.select(getLoadingState);
    this.showErrorMsg$ = this.store.select(getErrorMsg);
  }
}
