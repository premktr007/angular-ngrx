import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { PostListComponent } from "./posts/post-list/post-list.component";

const routes: Routes = [
    { path: '', component: CounterComponent },
    { path: 'posts', component: PostListComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: []
})

export class AppRoutingModule {}