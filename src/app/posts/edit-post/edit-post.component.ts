import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { updatePostAction } from '../state/posts.actions';
import { getPost, getPosts } from '../state/posts.selector';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  post: Post;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.getPost(param['id']);
      // this.initPostForm(post);
    });
  }

  getPost(id) {
    this.store.select(getPost(id)).subscribe(post => {
      // on loading posts/edit/2 that doesn't exists
      if(post == undefined) {
        this.router.navigate(['/posts']);
      }
      else {
        this.post = post;
        this.initPostForm();
      }
    })
  }

  initPostForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onUpdatePost() {
    if(this.postForm.valid) {
        const post: Post = {
        id: this.post.id,
        title: this.postForm.value.title,
        description: this.postForm.value.description
      }

      this.store.dispatch(updatePostAction({post}));
      this.router.navigate(['/posts']);
    }

  }
}
