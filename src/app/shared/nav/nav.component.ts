import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { isAuthenticated } from 'src/app/auth/store/auth.selector';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
      this.store.select(isAuthenticated).subscribe(resp => console.log(resp));
  }

}
