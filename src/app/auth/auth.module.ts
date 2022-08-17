import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { AuthEffects } from './store/auth.effects';
import { AuthReducer } from './store/auth.reducer';
import { AUTH_FEATURE } from './store/auth.selector';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    StoreModule.forFeature(AUTH_FEATURE, AuthReducer),
    EffectsModule.forFeature([AuthEffects ])
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
