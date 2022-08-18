import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { setLoading } from 'src/app/shared/store/shared.actions';
import { loginStart } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onLogin(loginForm) {
    const {email, password} = loginForm.form.value;
    this.store.dispatch(loginStart({email, password}));
    this.store.dispatch(setLoading({status: true}));
  }

}
