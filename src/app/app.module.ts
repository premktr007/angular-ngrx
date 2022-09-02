import { AUTH_STATE_NAME } from './auth/store/auth.selector';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { appReducer } from './app.state';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LoadingComponent } from './shared/loading/loading.component';
import { AuthReducer } from './auth/store/auth.reducer';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    NavComponent,
    LoadingComponent,
  ],
  imports: [
    StoreModule.forRoot(appReducer), // load the counter state onstart of the application
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    RouterModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
