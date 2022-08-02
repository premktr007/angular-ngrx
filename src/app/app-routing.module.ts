import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts-routing.module').then((m) => m.PostsRoutingModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
