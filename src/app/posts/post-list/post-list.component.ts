import { getPosts } from './../state/posts.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Post } from '../state/posts.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

}
