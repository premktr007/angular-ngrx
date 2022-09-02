import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { setLoading } from 'src/app/shared/store/shared.actions';
import { signupStart } from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onSignup(loginForm) {
    const {email, password} = loginForm.form.value;
    this.store.dispatch(signupStart({email, password}));
    this.store.dispatch(setLoading({status: true}));
  }

}
