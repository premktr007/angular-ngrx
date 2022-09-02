import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts-routing.module').then((m) => m.PostsRoutingModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})

export class AppRoutingModule {}
