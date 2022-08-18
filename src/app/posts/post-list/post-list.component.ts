import { getPosts } from '../store/posts.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Post } from '../store/posts.state';
import { Observable } from 'rxjs';
import { deletePostAction } from '../store/posts.actions';

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

  onDeletePost(postId) {
    if(confirm('Are you sure you want to delete the post ?')) {
      this.store.dispatch(deletePostAction({id: postId}));
    }
  }

}
