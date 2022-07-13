import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { NavComponent } from './nav/nav.component';
import { appReducer } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    NavComponent,
    PostListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
