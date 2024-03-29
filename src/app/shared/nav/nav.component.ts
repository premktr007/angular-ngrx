import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { autoLogout } from 'src/app/auth/store/auth.actions';
import { isAuthenticated } from 'src/app/auth/store/auth.selector';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
      this.isAuthenticated$ = this.store.select(isAuthenticated);
      console.log(this.isAuthenticated$)
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }

}
