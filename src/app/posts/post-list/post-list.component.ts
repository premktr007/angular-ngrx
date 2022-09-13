import { PostsState } from './../store/posts.state';
import { getPosts } from '../store/posts.selector';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../store/posts.state';
import { Observable } from 'rxjs';
import { deletePostAction, loadPosts } from '../store/posts.actions';
import { setLoading } from 'src/app/shared/store/shared.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(private store: Store<PostsState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
    // fixes the ExpressHaveBeenChanged error
    setTimeout(() => {
      this.store.dispatch(setLoading({ status: true }));
    }, 0);
  }

  onDeletePost(postId) {
    if(confirm('Are you sure you want to delete the post ?')) {
      this.store.dispatch(deletePostAction({id: postId}));
    }
  }

}
